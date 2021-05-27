type TTrackingAtrributes = {
  eventTime: Date;
};

export type TTrackingData = {
  object: string;
  action: string;
  component: string;
  attrs?: TTrackingAtrributes;
};
