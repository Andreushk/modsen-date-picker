function getParentDataAttribute(element: HTMLElement, dataAttribute: string): null | string {
  const clickedElement: Element | null = element.closest(`[${dataAttribute}]`);

  if (clickedElement) {
    const dataAttributeValue: string | null = clickedElement.getAttribute(dataAttribute);
    return dataAttributeValue;
  }

  return null;
}

export default getParentDataAttribute;
