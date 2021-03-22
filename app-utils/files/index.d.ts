/** @param {string} dir */
export function mkdirp(dir: string): void;
/** @param {string} path */
export function rimraf(path: string): void;
/**
 * @param {string} from
 * @param {string} to
 * @param {(basename: string) => boolean} filter
 */
export function copy(from: string, to: string, filter?: (basename: string) => boolean): string[];
