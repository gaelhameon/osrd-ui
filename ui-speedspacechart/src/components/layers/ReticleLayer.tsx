import React, { useEffect, useRef, useState } from 'react';

import type { TrainDetails, Store } from '../../types/chartTypes';
import DetailsBox from '../common/DetailsBox';
import { drawCursor } from '../helpers/drawElements/reticle';
import { getAdaptiveHeight } from '../utils';

type ReticleLayerProps = {
  width: number;
  height: number;
  heightOffset: number;
  store: Store;
  showDetailsBox: boolean;
  setShowDetailsBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReticleLayer = ({
  width,
  height,
  heightOffset,
  store,
  showDetailsBox,
  setShowDetailsBox,
}: ReticleLayerProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const detailsBox = useRef<TrainDetails>();
  const maxCursorHeight = getAdaptiveHeight(heightOffset, store.layersDisplay, false);

  useEffect(() => {
    const currentCanvas = canvas.current as HTMLCanvasElement;
    const ctx = currentCanvas.getContext('2d') as CanvasRenderingContext2D;
    // The tooltip shouldn't be displayed when hovering on the linear layers
    if (store.cursor.y && store.cursor.y < maxCursorHeight) {
      detailsBox.current = drawCursor({ ctx, width, height, store });
    }
  }, [width, height, store, maxCursorHeight]);

  const [debouncedDetailsBox, setDebouncedDetailsBox] = useState<TrainDetails | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedDetailsBox(detailsBox.current!);
      setShowDetailsBox(true);
    }, 50);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsBox.current]);

  return (
    <>
      <canvas id="cursor-layer" className="absolute" ref={canvas} width={width} height={height} />
      {showDetailsBox && debouncedDetailsBox && (
        <DetailsBox width={width} height={height} store={store} {...debouncedDetailsBox} />
      )}
    </>
  );
};

export default ReticleLayer;
