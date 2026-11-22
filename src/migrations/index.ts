import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20261122_054546_initial_collections from './20261122_054546_initial_collections';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20261122_054546_initial_collections.up,
    down: migration_20261122_054546_initial_collections.down,
    name: '20261122_054546_initial_collections'
  },
];
