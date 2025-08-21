export interface OfficeItem {
  key: string;
  titleKey: string;
  titleFallback: string;
  addressKey: string;
  addressFallback: string;
}

export const officesData: OfficeItem[] = [
  {
    key: "headOffice",
    titleKey: "pages.contactUs.offices.headOffice.title",
    titleFallback: "Head Office",
    addressKey: "pages.contactUs.offices.headOffice.address",
    addressFallback: "123 Business District\nRiyadh, Saudi Arabia 12345",
  },
  {
    key: "dubaiOffice",
    titleKey: "pages.contactUs.offices.dubaiOffice.title",
    titleFallback: "Dubai Office",
    addressKey: "pages.contactUs.offices.dubaiOffice.address",
    addressFallback: "456 Sheikh Zayed Road\nDubai, UAE 67890",
  },
];
