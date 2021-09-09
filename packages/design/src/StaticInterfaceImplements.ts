/**
 *  Static interface implements decorator.
 */
export function StaticInterfaceImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
