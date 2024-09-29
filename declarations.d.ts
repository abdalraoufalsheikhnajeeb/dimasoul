// declarations.d.ts
declare module "embla-carousel/react" {
  import EmblaCarousel from "embla-carousel";
  import { RefObject } from "react";

  export interface EmblaCarouselReactOptions {
    loop?: boolean;
    speed?: number;
    align?: "center" | "start" | "end";
    draggable?: boolean;
    containScroll?: "trimSnaps" | "keepSnaps";
  }

  export function useEmblaCarousel(
    options?: EmblaCarouselReactOptions,
    emblaRef?: RefObject<HTMLElement>,
  ): [RefObject<HTMLElement>, EmblaCarousel | undefined];

  export default useEmblaCarousel;
}
