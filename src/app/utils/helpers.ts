export function sum<T>(items: T[], func: (t: T) => number = undefined): number {
  if (func === undefined) {
    return innerSum(<number[]> <any> items, (el: number) => el);
  }
  return innerSum(items, func);
}

function innerSum<T>(items: T[], func: (t: T) => number): number {
  return items.reduce((sum: number, item: T) => sum + func(item), 0);
}

export function scrollToFragment(f: string) {
  const element = document.querySelector('#' + f);
  if (element) { element.scrollIntoView(element); }
}
