type TrackingAtrributes = {
  eventTime: Date;
};

export type TrackingData = {
  object: string;
  action: string;
  component: string;
  attrs?: TrackingAtrributes;
};
