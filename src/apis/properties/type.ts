export type PropertyInfo = {
  _id?: string;
  name: string;
  img: string;
  coverImg: string;
  bio: string;
  description: string;
  location: string;
  price: number;
  propertyType?: {
    mainType: string;
    subType: string;
  };
  propertyContent: PropertyContent[];

  gallery: [string];

  breifDetails: [
    {
      title: string;
      value: string;
    }
  ];
  qrInfo?: {
    image: string;
    listingNumber?: string;
  };
  locationDetails: string;
  connectivity: [
    {
      title: string;
      value: string;
    }
  ];
  paymentPlan: [
    {
      title: string;
      value: string;
    }
  ];
  floorPlan: string;
  masterPlan: string;
};

export type PropertyContent = {
  description: string;
  details: [
    {
      title: string;
      icon: string;
    }
  ];
  imgs: [string];
};

export type AddPropertyProps = {
  _id?: string;
  name: string;

  bio: string;
  description: string;
  location: string;
  price: number;

  propertyContent: PropertyContent[];

  breifDetails: [
    {
      title: string;
      value: string;
    }
  ];
  qrInfo?: {
    image: File | null;
    listingNumber?: string;
  };
  locationDetails: string;
  connectivity: [
    {
      title: string;
      value: string;
    }
  ];
  paymentPlan: [
    {
      title: string;
      value: string;
    }
  ];
  floorPlan: string;
  masterPlan: string;
  img: File | null;
  coverImg: File | null;
  gallery: File[] | null;
};
