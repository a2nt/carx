import { Route } from './routes';

export type RouteParams = {
  [Route.Discover]: undefined;
  [Route.Movies]: undefined;
  [Route.Shows]: undefined;
  [Route.Settings]: undefined;
  [Route.DeviceInfo]: undefined;
  [Route.Movie]: { id: number; title: string };
  [Route.Show]: { id: number; title: string };
  [Route.TrendingToday]: { id: number; title: string; type: string };
  [Route.Player]: { youTubeId: string; backgroundImageUrl?: string };
};
