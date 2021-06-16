type TrackingAtrributes = {
  eventTime: Date;
  pageName: string;
  pageSection: string;
};

export type TrackingData = {
  object: string;
  action: string;
  component: string;
  attrs?: TrackingAtrributes;
};
