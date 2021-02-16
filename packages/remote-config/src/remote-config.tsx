import React, { createContext, FC, ReactNode, useContext } from "react";

type RemoteConfig = {
  commentsGloballyDisabled?: boolean;
  variants?: {
    [key: string]: string;
  };
};

export const RemoteConfigContext = createContext<RemoteConfig>({
  commentsGloballyDisabled: false,
  variants: {},
});

type Props = {
  children: ReactNode;
  config: RemoteConfig;
};

export const RemoteConfigProvider: FC<Props> = ({
  config,
  children = null,
}) => (
  <RemoteConfigContext.Provider value={config}>
    {children}
  </RemoteConfigContext.Provider>
);

export const useRemoteConfigContext = () => useContext(RemoteConfigContext);
