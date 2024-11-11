import { KeyFilter, onKeyStroke, useGamepad } from "@vueuse/core";
import { computed, watch } from "vue";

function dirDetector(
  keys: KeyFilter,
  dpadIndex: number,
  axisIndex: number,
  axisNeg: boolean,
  cb: () => void
) {
  onKeyStroke(keys, (e) => {
    e.preventDefault();
    cb();
  });
  const { gamepads } = useGamepad();
  const gpPressed = computed(
    () =>
      gamepads.value.findIndex(
        (gp) =>
          gp.buttons[dpadIndex].pressed ||
          gp.axes[axisIndex] < (axisNeg ? -1 : 1) * 0.2
      ) !== -1
  );
  watch(gpPressed, (v, oldValue) => {
    if (v && !oldValue) cb();
  });
}
export function useLeftDetector(cb: () => void) {
  dirDetector(["a", "ArrowLeft"], 14, 0, true, cb);
}
export function useRightDetector(cb: () => void) {
  dirDetector(["d", "ArrowRight"], 15, 0, false, cb);
}
export function useUpDetector(cb: () => void) {
  dirDetector(["w", "ArrowUp"], 12, 1, true, cb);
}

export function useDownDetector(cb: () => void) {
  dirDetector(["s", "ArrowUp"], 13, 1, true, cb);
}
function buttonDetector(keys: KeyFilter, btnIndex: number, cb: () => void) {
  onKeyStroke(keys, (e) => {
    e.preventDefault();
    cb();
  });
  const { gamepads } = useGamepad();
  const gpPressed = computed(
    () => gamepads.value.findIndex((gp) => gp.buttons[btnIndex].pressed) !== -1
  );
  watch(gpPressed, (v, oldValue) => {
    if (v && !oldValue) cb();
  });
}
export function useConfirmDetector(cb: () => void) {
  buttonDetector(["space", "Enter"], 0, cb);
}
export function useBackDetector(cb: () => void) {
  buttonDetector(["Backspace"], 1, cb);
}
