import { useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";
import tinycolor from "tinycolor2";

type GradientResult = {
  gradient: {
    from: string;
    to: string;
  } | null;
};

export const useImageGradient = (imageUrl: string | null): GradientResult => {
  const [gradient, setGradient] = useState<GradientResult["gradient"]>(null);

  useEffect(() => {
    if (!imageUrl) return;

    Vibrant.from(imageUrl)
      .getPalette()
      .then((palette) => {
        const vibrant = palette.Vibrant?.hex;
        const darkVibrant = palette.DarkVibrant?.hex;

        if (vibrant) {
          const from = darkVibrant ?? vibrant;
          const to = tinycolor(vibrant).setAlpha(0.4).toRgbString();

          setGradient({ from, to });
        }
      });
  }, [imageUrl]);

  return { gradient };
};
