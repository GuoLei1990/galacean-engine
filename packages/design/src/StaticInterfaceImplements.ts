/**
 *  Static interface implements decorator.
 *  https://stackoverflow.com/questions/13955157/how-to-define-static-property-in-typescript-interface
 */
export function StaticInterfaceImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
