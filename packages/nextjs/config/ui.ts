export interface UIConfig {
  enabledFrameworks: {
    daisyui: boolean;
    shadcn: boolean;
    magic: boolean;
  };
}

const defaultConfig: UIConfig = {
  enabledFrameworks: {
    daisyui: true, // DaisyUI is enabled by default
    shadcn: process.env.NEXT_PUBLIC_ENABLE_SHADCN === "true",
    magic: process.env.NEXT_PUBLIC_ENABLE_MAGIC === "true",
  },
};

export const uiConfig: UIConfig = defaultConfig;

export const isFrameworkEnabled = (framework: keyof UIConfig["enabledFrameworks"]): boolean => {
  return uiConfig.enabledFrameworks[framework];
};
