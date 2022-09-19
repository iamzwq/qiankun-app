let shareMainComponent: Record<string, any> = {}

export const getMainCommonComponent = () => {
  return shareMainComponent;
}

export const setMainCommonComponent = (mainCommonComponent: Record<string, any>) => {
  for (const key in mainCommonComponent) {
    if (Object.prototype.hasOwnProperty.call(mainCommonComponent, key)) {
      shareMainComponent[key] = mainCommonComponent[key];
    }
  }
}