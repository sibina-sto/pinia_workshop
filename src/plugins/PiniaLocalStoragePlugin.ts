import type {
  SubscriptionCallbackMutation,
  Store,
  PiniaPluginContext,
} from "pinia";
export function PiniaLocalStoragePlugin({
  store,
  options,
}: PiniaPluginContext) {
  if (!options.localStorage) return;
  const localStorageKey = `PiniaStore_${store.$id}`;
  store.$subscribe(
    (mutation: SubscriptionCallbackMutation<Store>, state: any) => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    }
  );
  const savedState = localStorage.getItem(localStorageKey);
  if (savedState) {
    store.$state = JSON.parse(savedState);
  }
}

export default PiniaLocalStoragePlugin;
