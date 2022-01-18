export type Routes = {
  MainPage: undefined;
  PermissionsPage: undefined;
  CameraPage: undefined;
  MediaPage: {
    path: string;
    type: 'video' | 'photo';
  };
};
