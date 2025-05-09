
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model PlayHistory
 * 
 */
export type PlayHistory = $Result.DefaultSelection<Prisma.$PlayHistoryPayload>
/**
 * Model LikedSong
 * 
 */
export type LikedSong = $Result.DefaultSelection<Prisma.$LikedSongPayload>
/**
 * Model LikedAlbum
 * 
 */
export type LikedAlbum = $Result.DefaultSelection<Prisma.$LikedAlbumPayload>
/**
 * Model LikedPlaylist
 * 
 */
export type LikedPlaylist = $Result.DefaultSelection<Prisma.$LikedPlaylistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AlbumType: {
  ALBUM: 'ALBUM',
  SINGLE: 'SINGLE',
  EP: 'EP'
};

export type AlbumType = (typeof AlbumType)[keyof typeof AlbumType]


export const ArtistRole: {
  OWNER: 'OWNER',
  FEATURED: 'FEATURED'
};

export type ArtistRole = (typeof ArtistRole)[keyof typeof ArtistRole]


export const PlaylistType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type PlaylistType = (typeof PlaylistType)[keyof typeof PlaylistType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AlbumType = $Enums.AlbumType

export const AlbumType: typeof $Enums.AlbumType

export type ArtistRole = $Enums.ArtistRole

export const ArtistRole: typeof $Enums.ArtistRole

export type PlaylistType = $Enums.PlaylistType

export const PlaylistType: typeof $Enums.PlaylistType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playHistory`: Exposes CRUD operations for the **PlayHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayHistories
    * const playHistories = await prisma.playHistory.findMany()
    * ```
    */
  get playHistory(): Prisma.PlayHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedSong`: Exposes CRUD operations for the **LikedSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedSongs
    * const likedSongs = await prisma.likedSong.findMany()
    * ```
    */
  get likedSong(): Prisma.LikedSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedAlbum`: Exposes CRUD operations for the **LikedAlbum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedAlbums
    * const likedAlbums = await prisma.likedAlbum.findMany()
    * ```
    */
  get likedAlbum(): Prisma.LikedAlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedPlaylist`: Exposes CRUD operations for the **LikedPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedPlaylists
    * const likedPlaylists = await prisma.likedPlaylist.findMany()
    * ```
    */
  get likedPlaylist(): Prisma.LikedPlaylistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Artist: 'Artist',
    Song: 'Song',
    Album: 'Album',
    Playlist: 'Playlist',
    Genre: 'Genre',
    PlayHistory: 'PlayHistory',
    LikedSong: 'LikedSong',
    LikedAlbum: 'LikedAlbum',
    LikedPlaylist: 'LikedPlaylist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "artist" | "song" | "album" | "playlist" | "genre" | "playHistory" | "likedSong" | "likedAlbum" | "likedPlaylist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      PlayHistory: {
        payload: Prisma.$PlayHistoryPayload<ExtArgs>
        fields: Prisma.PlayHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          findFirst: {
            args: Prisma.PlayHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          findMany: {
            args: Prisma.PlayHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>[]
          }
          create: {
            args: Prisma.PlayHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          createMany: {
            args: Prisma.PlayHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>[]
          }
          delete: {
            args: Prisma.PlayHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          update: {
            args: Prisma.PlayHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PlayHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PlayHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayHistoryPayload>
          }
          aggregate: {
            args: Prisma.PlayHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayHistory>
          }
          groupBy: {
            args: Prisma.PlayHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PlayHistoryCountAggregateOutputType> | number
          }
        }
      }
      LikedSong: {
        payload: Prisma.$LikedSongPayload<ExtArgs>
        fields: Prisma.LikedSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findFirst: {
            args: Prisma.LikedSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findMany: {
            args: Prisma.LikedSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          create: {
            args: Prisma.LikedSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          createMany: {
            args: Prisma.LikedSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          delete: {
            args: Prisma.LikedSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          update: {
            args: Prisma.LikedSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          deleteMany: {
            args: Prisma.LikedSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          upsert: {
            args: Prisma.LikedSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          aggregate: {
            args: Prisma.LikedSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedSong>
          }
          groupBy: {
            args: Prisma.LikedSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedSongCountArgs<ExtArgs>
            result: $Utils.Optional<LikedSongCountAggregateOutputType> | number
          }
        }
      }
      LikedAlbum: {
        payload: Prisma.$LikedAlbumPayload<ExtArgs>
        fields: Prisma.LikedAlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedAlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedAlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          findFirst: {
            args: Prisma.LikedAlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedAlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          findMany: {
            args: Prisma.LikedAlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>[]
          }
          create: {
            args: Prisma.LikedAlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          createMany: {
            args: Prisma.LikedAlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedAlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>[]
          }
          delete: {
            args: Prisma.LikedAlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          update: {
            args: Prisma.LikedAlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          deleteMany: {
            args: Prisma.LikedAlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedAlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedAlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>[]
          }
          upsert: {
            args: Prisma.LikedAlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumPayload>
          }
          aggregate: {
            args: Prisma.LikedAlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedAlbum>
          }
          groupBy: {
            args: Prisma.LikedAlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedAlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedAlbumCountArgs<ExtArgs>
            result: $Utils.Optional<LikedAlbumCountAggregateOutputType> | number
          }
        }
      }
      LikedPlaylist: {
        payload: Prisma.$LikedPlaylistPayload<ExtArgs>
        fields: Prisma.LikedPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          findFirst: {
            args: Prisma.LikedPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          findMany: {
            args: Prisma.LikedPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>[]
          }
          create: {
            args: Prisma.LikedPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          createMany: {
            args: Prisma.LikedPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>[]
          }
          delete: {
            args: Prisma.LikedPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          update: {
            args: Prisma.LikedPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.LikedPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.LikedPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          aggregate: {
            args: Prisma.LikedPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedPlaylist>
          }
          groupBy: {
            args: Prisma.LikedPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<LikedPlaylistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    artist?: ArtistOmit
    song?: SongOmit
    album?: AlbumOmit
    playlist?: PlaylistOmit
    genre?: GenreOmit
    playHistory?: PlayHistoryOmit
    likedSong?: LikedSongOmit
    likedAlbum?: LikedAlbumOmit
    likedPlaylist?: LikedPlaylistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    following: number
    playlists: number
    playHistory: number
    likedSongs: number
    likedAlbums: number
    likedPlaylists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    playHistory?: boolean | UserCountOutputTypeCountPlayHistoryArgs
    likedSongs?: boolean | UserCountOutputTypeCountLikedSongsArgs
    likedAlbums?: boolean | UserCountOutputTypeCountLikedAlbumsArgs
    likedPlaylists?: boolean | UserCountOutputTypeCountLikedPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    songs: number
    albums: number
    followers: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | ArtistCountOutputTypeCountSongsArgs
    albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    followers?: boolean | ArtistCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    artists: number
    genres: number
    playlists: number
    playHistory: number
    likedBy: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | SongCountOutputTypeCountArtistsArgs
    genres?: boolean | SongCountOutputTypeCountGenresArgs
    playlists?: boolean | SongCountOutputTypeCountPlaylistsArgs
    playHistory?: boolean | SongCountOutputTypeCountPlayHistoryArgs
    likedBy?: boolean | SongCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlayHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayHistoryWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    songs: number
    likedBy: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | AlbumCountOutputTypeCountSongsArgs
    likedBy?: boolean | AlbumCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    songs: number
    likedBy: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | PlaylistCountOutputTypeCountSongsArgs
    likedBy?: boolean | PlaylistCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    songs: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | GenreCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    role: $Enums.UserRole | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    role: $Enums.UserRole | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    role: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    role?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    image: string | null
    role: $Enums.UserRole
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    following?: boolean | User$followingArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    playHistory?: boolean | User$playHistoryArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    likedPlaylists?: boolean | User$likedPlaylistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "image" | "role" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | User$followingArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    playHistory?: boolean | User$playHistoryArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    likedPlaylists?: boolean | User$likedPlaylistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      following: Prisma.$ArtistPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      playHistory: Prisma.$PlayHistoryPayload<ExtArgs>[]
      likedSongs: Prisma.$LikedSongPayload<ExtArgs>[]
      likedAlbums: Prisma.$LikedAlbumPayload<ExtArgs>[]
      likedPlaylists: Prisma.$LikedPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      image: string | null
      role: $Enums.UserRole
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playHistory<T extends User$playHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$playHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedSongs<T extends User$likedSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedAlbums<T extends User$likedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedPlaylists<T extends User$likedPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.playHistory
   */
  export type User$playHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    where?: PlayHistoryWhereInput
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    cursor?: PlayHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayHistoryScalarFieldEnum | PlayHistoryScalarFieldEnum[]
  }

  /**
   * User.likedSongs
   */
  export type User$likedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * User.likedAlbums
   */
  export type User$likedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    where?: LikedAlbumWhereInput
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    cursor?: LikedAlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumScalarFieldEnum | LikedAlbumScalarFieldEnum[]
  }

  /**
   * User.likedPlaylists
   */
  export type User$likedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    cursor?: LikedPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    monthlyListeners: number | null
  }

  export type ArtistSumAggregateOutputType = {
    monthlyListeners: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    bio: string | null
    coverImage: string | null
    monthlyListeners: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    bio: string | null
    coverImage: string | null
    monthlyListeners: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    bio: number
    coverImage: number
    monthlyListeners: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    monthlyListeners?: true
  }

  export type ArtistSumAggregateInputType = {
    monthlyListeners?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    coverImage?: true
    monthlyListeners?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    coverImage?: true
    monthlyListeners?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    coverImage?: true
    monthlyListeners?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    slug: string
    bio: string | null
    coverImage: string | null
    monthlyListeners: number
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    coverImage?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    coverImage?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    coverImage?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    coverImage?: boolean
    monthlyListeners?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "bio" | "coverImage" | "monthlyListeners" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      bio: string | null
      coverImage: string | null
      monthlyListeners: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Artist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends Artist$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Artist$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artist$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly slug: FieldRef<"Artist", 'String'>
    readonly bio: FieldRef<"Artist", 'String'>
    readonly coverImage: FieldRef<"Artist", 'String'>
    readonly monthlyListeners: FieldRef<"Artist", 'Int'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.songs
   */
  export type Artist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Artist.albums
   */
  export type Artist$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist.followers
   */
  export type Artist$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
    playCount: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
    playCount: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    lyrics: string | null
    duration: number | null
    releaseDate: Date | null
    playCount: number | null
    isExplicit: boolean | null
    audioUrl: string | null
    coverImage: string | null
    albumId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    lyrics: string | null
    duration: number | null
    releaseDate: Date | null
    playCount: number | null
    isExplicit: boolean | null
    audioUrl: string | null
    coverImage: string | null
    albumId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    lyrics: number
    duration: number
    releaseDate: number
    playCount: number
    isExplicit: number
    audioUrl: number
    coverImage: number
    albumId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
    playCount?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
    playCount?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    lyrics?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    isExplicit?: true
    audioUrl?: true
    coverImage?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    lyrics?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    isExplicit?: true
    audioUrl?: true
    coverImage?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    lyrics?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    isExplicit?: true
    audioUrl?: true
    coverImage?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    title: string
    slug: string
    lyrics: string | null
    duration: number
    releaseDate: Date | null
    playCount: number
    isExplicit: boolean
    audioUrl: string
    coverImage: string | null
    albumId: string
    createdAt: Date
    updatedAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    lyrics?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    isExplicit?: boolean
    audioUrl?: boolean
    coverImage?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artists?: boolean | Song$artistsArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genres?: boolean | Song$genresArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    playHistory?: boolean | Song$playHistoryArgs<ExtArgs>
    likedBy?: boolean | Song$likedByArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    lyrics?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    isExplicit?: boolean
    audioUrl?: boolean
    coverImage?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    lyrics?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    isExplicit?: boolean
    audioUrl?: boolean
    coverImage?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    lyrics?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    isExplicit?: boolean
    audioUrl?: boolean
    coverImage?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "lyrics" | "duration" | "releaseDate" | "playCount" | "isExplicit" | "audioUrl" | "coverImage" | "albumId" | "createdAt" | "updatedAt", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | Song$artistsArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genres?: boolean | Song$genresArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    playHistory?: boolean | Song$playHistoryArgs<ExtArgs>
    likedBy?: boolean | Song$likedByArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      artists: Prisma.$ArtistPayload<ExtArgs>[]
      album: Prisma.$AlbumPayload<ExtArgs>
      genres: Prisma.$GenrePayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      playHistory: Prisma.$PlayHistoryPayload<ExtArgs>[]
      likedBy: Prisma.$LikedSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      lyrics: string | null
      duration: number
      releaseDate: Date | null
      playCount: number
      isExplicit: boolean
      audioUrl: string
      coverImage: string | null
      albumId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artists<T extends Song$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Song$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genres<T extends Song$genresArgs<ExtArgs> = {}>(args?: Subset<T, Song$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends Song$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playHistory<T extends Song$playHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Song$playHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends Song$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Song$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly slug: FieldRef<"Song", 'String'>
    readonly lyrics: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Int'>
    readonly releaseDate: FieldRef<"Song", 'DateTime'>
    readonly playCount: FieldRef<"Song", 'Int'>
    readonly isExplicit: FieldRef<"Song", 'Boolean'>
    readonly audioUrl: FieldRef<"Song", 'String'>
    readonly coverImage: FieldRef<"Song", 'String'>
    readonly albumId: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.artists
   */
  export type Song$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Song.genres
   */
  export type Song$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Song.playlists
   */
  export type Song$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Song.playHistory
   */
  export type Song$playHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    where?: PlayHistoryWhereInput
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    cursor?: PlayHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayHistoryScalarFieldEnum | PlayHistoryScalarFieldEnum[]
  }

  /**
   * Song.likedBy
   */
  export type Song$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    duration: number | null
    playCount: number | null
  }

  export type AlbumSumAggregateOutputType = {
    duration: number | null
    playCount: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    slug: string | null
    type: $Enums.AlbumType | null
    duration: number | null
    releaseDate: Date | null
    playCount: number | null
    coverImage: string | null
    isExplicit: boolean | null
    artistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    slug: string | null
    type: $Enums.AlbumType | null
    duration: number | null
    releaseDate: Date | null
    playCount: number | null
    coverImage: string | null
    isExplicit: boolean | null
    artistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    description: number
    slug: number
    type: number
    duration: number
    releaseDate: number
    playCount: number
    coverImage: number
    isExplicit: number
    artistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    duration?: true
    playCount?: true
  }

  export type AlbumSumAggregateInputType = {
    duration?: true
    playCount?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    type?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    coverImage?: true
    isExplicit?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    type?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    coverImage?: true
    isExplicit?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    type?: true
    duration?: true
    releaseDate?: true
    playCount?: true
    coverImage?: true
    isExplicit?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    description: string | null
    slug: string
    type: $Enums.AlbumType
    duration: number
    releaseDate: Date | null
    playCount: number
    coverImage: string | null
    isExplicit: boolean
    artistId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    type?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    coverImage?: boolean
    isExplicit?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | Album$artistArgs<ExtArgs>
    likedBy?: boolean | Album$likedByArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    type?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    coverImage?: boolean
    isExplicit?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    type?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    coverImage?: boolean
    isExplicit?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    type?: boolean
    duration?: boolean
    releaseDate?: boolean
    playCount?: boolean
    coverImage?: boolean
    isExplicit?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "slug" | "type" | "duration" | "releaseDate" | "playCount" | "coverImage" | "isExplicit" | "artistId" | "createdAt" | "updatedAt", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | Album$artistArgs<ExtArgs>
    likedBy?: boolean | Album$likedByArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      likedBy: Prisma.$LikedAlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      slug: string
      type: $Enums.AlbumType
      duration: number
      releaseDate: Date | null
      playCount: number
      coverImage: string | null
      isExplicit: boolean
      artistId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Album$songsArgs<ExtArgs> = {}>(args?: Subset<T, Album$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artist<T extends Album$artistArgs<ExtArgs> = {}>(args?: Subset<T, Album$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likedBy<T extends Album$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Album$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly title: FieldRef<"Album", 'String'>
    readonly description: FieldRef<"Album", 'String'>
    readonly slug: FieldRef<"Album", 'String'>
    readonly type: FieldRef<"Album", 'AlbumType'>
    readonly duration: FieldRef<"Album", 'Int'>
    readonly releaseDate: FieldRef<"Album", 'DateTime'>
    readonly playCount: FieldRef<"Album", 'Int'>
    readonly coverImage: FieldRef<"Album", 'String'>
    readonly isExplicit: FieldRef<"Album", 'Boolean'>
    readonly artistId: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.songs
   */
  export type Album$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Album.artist
   */
  export type Album$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Album.likedBy
   */
  export type Album$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    where?: LikedAlbumWhereInput
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    cursor?: LikedAlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumScalarFieldEnum | LikedAlbumScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    duration: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    duration: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    slug: string | null
    duration: number | null
    releaseDate: Date | null
    type: $Enums.PlaylistType | null
    coverImage: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    slug: string | null
    duration: number | null
    releaseDate: Date | null
    type: $Enums.PlaylistType | null
    coverImage: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    slug: number
    duration: number
    releaseDate: number
    type: number
    coverImage: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    duration?: true
  }

  export type PlaylistSumAggregateInputType = {
    duration?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    duration?: true
    releaseDate?: true
    type?: true
    coverImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    duration?: true
    releaseDate?: true
    type?: true
    coverImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    duration?: true
    releaseDate?: true
    type?: true
    coverImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    title: string
    description: string | null
    slug: string
    duration: number
    releaseDate: Date | null
    type: $Enums.PlaylistType
    coverImage: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    duration?: boolean
    releaseDate?: boolean
    type?: boolean
    coverImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    user?: boolean | Playlist$userArgs<ExtArgs>
    likedBy?: boolean | Playlist$likedByArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    duration?: boolean
    releaseDate?: boolean
    type?: boolean
    coverImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Playlist$userArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    duration?: boolean
    releaseDate?: boolean
    type?: boolean
    coverImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Playlist$userArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    duration?: boolean
    releaseDate?: boolean
    type?: boolean
    coverImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "slug" | "duration" | "releaseDate" | "type" | "coverImage" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    user?: boolean | Playlist$userArgs<ExtArgs>
    likedBy?: boolean | Playlist$likedByArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Playlist$userArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Playlist$userArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      likedBy: Prisma.$LikedPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      slug: string
      duration: number
      releaseDate: Date | null
      type: $Enums.PlaylistType
      coverImage: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Playlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Playlist$userArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likedBy<T extends Playlist$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly slug: FieldRef<"Playlist", 'String'>
    readonly duration: FieldRef<"Playlist", 'Int'>
    readonly releaseDate: FieldRef<"Playlist", 'DateTime'>
    readonly type: FieldRef<"Playlist", 'PlaylistType'>
    readonly coverImage: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.songs
   */
  export type Playlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Playlist.user
   */
  export type Playlist$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Playlist.likedBy
   */
  export type Playlist$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    cursor?: LikedPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    songCount: number | null
  }

  export type GenreSumAggregateOutputType = {
    songCount: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    slug: string | null
    songCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    slug: string | null
    songCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    description: number
    slug: number
    songCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    songCount?: true
  }

  export type GenreSumAggregateInputType = {
    songCount?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    songCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    songCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    songCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    description: string | null
    slug: string
    songCount: number
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    songCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Genre$songsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    songCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    songCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    songCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slug" | "songCount" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Genre$songsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      slug: string
      songCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Genre$songsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly description: FieldRef<"Genre", 'String'>
    readonly slug: FieldRef<"Genre", 'String'>
    readonly songCount: FieldRef<"Genre", 'Int'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.songs
   */
  export type Genre$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model PlayHistory
   */

  export type AggregatePlayHistory = {
    _count: PlayHistoryCountAggregateOutputType | null
    _min: PlayHistoryMinAggregateOutputType | null
    _max: PlayHistoryMaxAggregateOutputType | null
  }

  export type PlayHistoryMinAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    playedAt: Date | null
  }

  export type PlayHistoryMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    playedAt: Date | null
  }

  export type PlayHistoryCountAggregateOutputType = {
    id: number
    songId: number
    userId: number
    playedAt: number
    _all: number
  }


  export type PlayHistoryMinAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    playedAt?: true
  }

  export type PlayHistoryMaxAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    playedAt?: true
  }

  export type PlayHistoryCountAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    playedAt?: true
    _all?: true
  }

  export type PlayHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayHistory to aggregate.
     */
    where?: PlayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayHistories to fetch.
     */
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayHistories
    **/
    _count?: true | PlayHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayHistoryMaxAggregateInputType
  }

  export type GetPlayHistoryAggregateType<T extends PlayHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayHistory[P]>
      : GetScalarType<T[P], AggregatePlayHistory[P]>
  }




  export type PlayHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayHistoryWhereInput
    orderBy?: PlayHistoryOrderByWithAggregationInput | PlayHistoryOrderByWithAggregationInput[]
    by: PlayHistoryScalarFieldEnum[] | PlayHistoryScalarFieldEnum
    having?: PlayHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayHistoryCountAggregateInputType | true
    _min?: PlayHistoryMinAggregateInputType
    _max?: PlayHistoryMaxAggregateInputType
  }

  export type PlayHistoryGroupByOutputType = {
    id: string
    songId: string
    userId: string
    playedAt: Date
    _count: PlayHistoryCountAggregateOutputType | null
    _min: PlayHistoryMinAggregateOutputType | null
    _max: PlayHistoryMaxAggregateOutputType | null
  }

  type GetPlayHistoryGroupByPayload<T extends PlayHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PlayHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PlayHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    playedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playHistory"]>

  export type PlayHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    playedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playHistory"]>

  export type PlayHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    playedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playHistory"]>

  export type PlayHistorySelectScalar = {
    id?: boolean
    songId?: boolean
    userId?: boolean
    playedAt?: boolean
  }

  export type PlayHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "userId" | "playedAt", ExtArgs["result"]["playHistory"]>
  export type PlayHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayHistory"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      userId: string
      playedAt: Date
    }, ExtArgs["result"]["playHistory"]>
    composites: {}
  }

  type PlayHistoryGetPayload<S extends boolean | null | undefined | PlayHistoryDefaultArgs> = $Result.GetResult<Prisma.$PlayHistoryPayload, S>

  type PlayHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayHistoryCountAggregateInputType | true
    }

  export interface PlayHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayHistory'], meta: { name: 'PlayHistory' } }
    /**
     * Find zero or one PlayHistory that matches the filter.
     * @param {PlayHistoryFindUniqueArgs} args - Arguments to find a PlayHistory
     * @example
     * // Get one PlayHistory
     * const playHistory = await prisma.playHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayHistoryFindUniqueArgs>(args: SelectSubset<T, PlayHistoryFindUniqueArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayHistoryFindUniqueOrThrowArgs} args - Arguments to find a PlayHistory
     * @example
     * // Get one PlayHistory
     * const playHistory = await prisma.playHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryFindFirstArgs} args - Arguments to find a PlayHistory
     * @example
     * // Get one PlayHistory
     * const playHistory = await prisma.playHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayHistoryFindFirstArgs>(args?: SelectSubset<T, PlayHistoryFindFirstArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryFindFirstOrThrowArgs} args - Arguments to find a PlayHistory
     * @example
     * // Get one PlayHistory
     * const playHistory = await prisma.playHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayHistories
     * const playHistories = await prisma.playHistory.findMany()
     * 
     * // Get first 10 PlayHistories
     * const playHistories = await prisma.playHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playHistoryWithIdOnly = await prisma.playHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayHistoryFindManyArgs>(args?: SelectSubset<T, PlayHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayHistory.
     * @param {PlayHistoryCreateArgs} args - Arguments to create a PlayHistory.
     * @example
     * // Create one PlayHistory
     * const PlayHistory = await prisma.playHistory.create({
     *   data: {
     *     // ... data to create a PlayHistory
     *   }
     * })
     * 
     */
    create<T extends PlayHistoryCreateArgs>(args: SelectSubset<T, PlayHistoryCreateArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayHistories.
     * @param {PlayHistoryCreateManyArgs} args - Arguments to create many PlayHistories.
     * @example
     * // Create many PlayHistories
     * const playHistory = await prisma.playHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayHistoryCreateManyArgs>(args?: SelectSubset<T, PlayHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayHistories and returns the data saved in the database.
     * @param {PlayHistoryCreateManyAndReturnArgs} args - Arguments to create many PlayHistories.
     * @example
     * // Create many PlayHistories
     * const playHistory = await prisma.playHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayHistories and only return the `id`
     * const playHistoryWithIdOnly = await prisma.playHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayHistory.
     * @param {PlayHistoryDeleteArgs} args - Arguments to delete one PlayHistory.
     * @example
     * // Delete one PlayHistory
     * const PlayHistory = await prisma.playHistory.delete({
     *   where: {
     *     // ... filter to delete one PlayHistory
     *   }
     * })
     * 
     */
    delete<T extends PlayHistoryDeleteArgs>(args: SelectSubset<T, PlayHistoryDeleteArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayHistory.
     * @param {PlayHistoryUpdateArgs} args - Arguments to update one PlayHistory.
     * @example
     * // Update one PlayHistory
     * const playHistory = await prisma.playHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayHistoryUpdateArgs>(args: SelectSubset<T, PlayHistoryUpdateArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayHistories.
     * @param {PlayHistoryDeleteManyArgs} args - Arguments to filter PlayHistories to delete.
     * @example
     * // Delete a few PlayHistories
     * const { count } = await prisma.playHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayHistoryDeleteManyArgs>(args?: SelectSubset<T, PlayHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayHistories
     * const playHistory = await prisma.playHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayHistoryUpdateManyArgs>(args: SelectSubset<T, PlayHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayHistories and returns the data updated in the database.
     * @param {PlayHistoryUpdateManyAndReturnArgs} args - Arguments to update many PlayHistories.
     * @example
     * // Update many PlayHistories
     * const playHistory = await prisma.playHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayHistories and only return the `id`
     * const playHistoryWithIdOnly = await prisma.playHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayHistory.
     * @param {PlayHistoryUpsertArgs} args - Arguments to update or create a PlayHistory.
     * @example
     * // Update or create a PlayHistory
     * const playHistory = await prisma.playHistory.upsert({
     *   create: {
     *     // ... data to create a PlayHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayHistory we want to update
     *   }
     * })
     */
    upsert<T extends PlayHistoryUpsertArgs>(args: SelectSubset<T, PlayHistoryUpsertArgs<ExtArgs>>): Prisma__PlayHistoryClient<$Result.GetResult<Prisma.$PlayHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryCountArgs} args - Arguments to filter PlayHistories to count.
     * @example
     * // Count the number of PlayHistories
     * const count = await prisma.playHistory.count({
     *   where: {
     *     // ... the filter for the PlayHistories we want to count
     *   }
     * })
    **/
    count<T extends PlayHistoryCountArgs>(
      args?: Subset<T, PlayHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayHistoryAggregateArgs>(args: Subset<T, PlayHistoryAggregateArgs>): Prisma.PrismaPromise<GetPlayHistoryAggregateType<T>>

    /**
     * Group by PlayHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PlayHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayHistory model
   */
  readonly fields: PlayHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayHistory model
   */
  interface PlayHistoryFieldRefs {
    readonly id: FieldRef<"PlayHistory", 'String'>
    readonly songId: FieldRef<"PlayHistory", 'String'>
    readonly userId: FieldRef<"PlayHistory", 'String'>
    readonly playedAt: FieldRef<"PlayHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayHistory findUnique
   */
  export type PlayHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlayHistory to fetch.
     */
    where: PlayHistoryWhereUniqueInput
  }

  /**
   * PlayHistory findUniqueOrThrow
   */
  export type PlayHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlayHistory to fetch.
     */
    where: PlayHistoryWhereUniqueInput
  }

  /**
   * PlayHistory findFirst
   */
  export type PlayHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlayHistory to fetch.
     */
    where?: PlayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayHistories to fetch.
     */
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayHistories.
     */
    cursor?: PlayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayHistories.
     */
    distinct?: PlayHistoryScalarFieldEnum | PlayHistoryScalarFieldEnum[]
  }

  /**
   * PlayHistory findFirstOrThrow
   */
  export type PlayHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlayHistory to fetch.
     */
    where?: PlayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayHistories to fetch.
     */
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayHistories.
     */
    cursor?: PlayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayHistories.
     */
    distinct?: PlayHistoryScalarFieldEnum | PlayHistoryScalarFieldEnum[]
  }

  /**
   * PlayHistory findMany
   */
  export type PlayHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlayHistories to fetch.
     */
    where?: PlayHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayHistories to fetch.
     */
    orderBy?: PlayHistoryOrderByWithRelationInput | PlayHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayHistories.
     */
    cursor?: PlayHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayHistories.
     */
    skip?: number
    distinct?: PlayHistoryScalarFieldEnum | PlayHistoryScalarFieldEnum[]
  }

  /**
   * PlayHistory create
   */
  export type PlayHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayHistory.
     */
    data: XOR<PlayHistoryCreateInput, PlayHistoryUncheckedCreateInput>
  }

  /**
   * PlayHistory createMany
   */
  export type PlayHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayHistories.
     */
    data: PlayHistoryCreateManyInput | PlayHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayHistory createManyAndReturn
   */
  export type PlayHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PlayHistories.
     */
    data: PlayHistoryCreateManyInput | PlayHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayHistory update
   */
  export type PlayHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayHistory.
     */
    data: XOR<PlayHistoryUpdateInput, PlayHistoryUncheckedUpdateInput>
    /**
     * Choose, which PlayHistory to update.
     */
    where: PlayHistoryWhereUniqueInput
  }

  /**
   * PlayHistory updateMany
   */
  export type PlayHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayHistories.
     */
    data: XOR<PlayHistoryUpdateManyMutationInput, PlayHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlayHistories to update
     */
    where?: PlayHistoryWhereInput
    /**
     * Limit how many PlayHistories to update.
     */
    limit?: number
  }

  /**
   * PlayHistory updateManyAndReturn
   */
  export type PlayHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PlayHistories.
     */
    data: XOR<PlayHistoryUpdateManyMutationInput, PlayHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlayHistories to update
     */
    where?: PlayHistoryWhereInput
    /**
     * Limit how many PlayHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayHistory upsert
   */
  export type PlayHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayHistory to update in case it exists.
     */
    where: PlayHistoryWhereUniqueInput
    /**
     * In case the PlayHistory found by the `where` argument doesn't exist, create a new PlayHistory with this data.
     */
    create: XOR<PlayHistoryCreateInput, PlayHistoryUncheckedCreateInput>
    /**
     * In case the PlayHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayHistoryUpdateInput, PlayHistoryUncheckedUpdateInput>
  }

  /**
   * PlayHistory delete
   */
  export type PlayHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
    /**
     * Filter which PlayHistory to delete.
     */
    where: PlayHistoryWhereUniqueInput
  }

  /**
   * PlayHistory deleteMany
   */
  export type PlayHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayHistories to delete
     */
    where?: PlayHistoryWhereInput
    /**
     * Limit how many PlayHistories to delete.
     */
    limit?: number
  }

  /**
   * PlayHistory without action
   */
  export type PlayHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayHistory
     */
    select?: PlayHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayHistory
     */
    omit?: PlayHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayHistoryInclude<ExtArgs> | null
  }


  /**
   * Model LikedSong
   */

  export type AggregateLikedSong = {
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  export type LikedSongMinAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedSongMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedSongCountAggregateOutputType = {
    id: number
    songId: number
    userId: number
    likedAt: number
    _all: number
  }


  export type LikedSongMinAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedSongMaxAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedSongCountAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    likedAt?: true
    _all?: true
  }

  export type LikedSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSong to aggregate.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedSongs
    **/
    _count?: true | LikedSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedSongMaxAggregateInputType
  }

  export type GetLikedSongAggregateType<T extends LikedSongAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedSong[P]>
      : GetScalarType<T[P], AggregateLikedSong[P]>
  }




  export type LikedSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithAggregationInput | LikedSongOrderByWithAggregationInput[]
    by: LikedSongScalarFieldEnum[] | LikedSongScalarFieldEnum
    having?: LikedSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedSongCountAggregateInputType | true
    _min?: LikedSongMinAggregateInputType
    _max?: LikedSongMaxAggregateInputType
  }

  export type LikedSongGroupByOutputType = {
    id: string
    songId: string
    userId: string
    likedAt: Date
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  type GetLikedSongGroupByPayload<T extends LikedSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
            : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
        }
      >
    >


  export type LikedSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    likedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    likedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    likedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectScalar = {
    id?: boolean
    songId?: boolean
    userId?: boolean
    likedAt?: boolean
  }

  export type LikedSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "userId" | "likedAt", ExtArgs["result"]["likedSong"]>
  export type LikedSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikedSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedSong"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      userId: string
      likedAt: Date
    }, ExtArgs["result"]["likedSong"]>
    composites: {}
  }

  type LikedSongGetPayload<S extends boolean | null | undefined | LikedSongDefaultArgs> = $Result.GetResult<Prisma.$LikedSongPayload, S>

  type LikedSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedSongCountAggregateInputType | true
    }

  export interface LikedSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedSong'], meta: { name: 'LikedSong' } }
    /**
     * Find zero or one LikedSong that matches the filter.
     * @param {LikedSongFindUniqueArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedSongFindUniqueArgs>(args: SelectSubset<T, LikedSongFindUniqueArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedSongFindUniqueOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedSongFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedSongFindFirstArgs>(args?: SelectSubset<T, LikedSongFindFirstArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedSongFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedSongs
     * const likedSongs = await prisma.likedSong.findMany()
     * 
     * // Get first 10 LikedSongs
     * const likedSongs = await prisma.likedSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedSongFindManyArgs>(args?: SelectSubset<T, LikedSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedSong.
     * @param {LikedSongCreateArgs} args - Arguments to create a LikedSong.
     * @example
     * // Create one LikedSong
     * const LikedSong = await prisma.likedSong.create({
     *   data: {
     *     // ... data to create a LikedSong
     *   }
     * })
     * 
     */
    create<T extends LikedSongCreateArgs>(args: SelectSubset<T, LikedSongCreateArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedSongs.
     * @param {LikedSongCreateManyArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSong = await prisma.likedSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedSongCreateManyArgs>(args?: SelectSubset<T, LikedSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedSongs and returns the data saved in the database.
     * @param {LikedSongCreateManyAndReturnArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSong = await prisma.likedSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedSongs and only return the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedSongCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedSong.
     * @param {LikedSongDeleteArgs} args - Arguments to delete one LikedSong.
     * @example
     * // Delete one LikedSong
     * const LikedSong = await prisma.likedSong.delete({
     *   where: {
     *     // ... filter to delete one LikedSong
     *   }
     * })
     * 
     */
    delete<T extends LikedSongDeleteArgs>(args: SelectSubset<T, LikedSongDeleteArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedSong.
     * @param {LikedSongUpdateArgs} args - Arguments to update one LikedSong.
     * @example
     * // Update one LikedSong
     * const likedSong = await prisma.likedSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedSongUpdateArgs>(args: SelectSubset<T, LikedSongUpdateArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedSongs.
     * @param {LikedSongDeleteManyArgs} args - Arguments to filter LikedSongs to delete.
     * @example
     * // Delete a few LikedSongs
     * const { count } = await prisma.likedSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedSongDeleteManyArgs>(args?: SelectSubset<T, LikedSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedSongs
     * const likedSong = await prisma.likedSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedSongUpdateManyArgs>(args: SelectSubset<T, LikedSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs and returns the data updated in the database.
     * @param {LikedSongUpdateManyAndReturnArgs} args - Arguments to update many LikedSongs.
     * @example
     * // Update many LikedSongs
     * const likedSong = await prisma.likedSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedSongs and only return the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedSongUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedSong.
     * @param {LikedSongUpsertArgs} args - Arguments to update or create a LikedSong.
     * @example
     * // Update or create a LikedSong
     * const likedSong = await prisma.likedSong.upsert({
     *   create: {
     *     // ... data to create a LikedSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedSong we want to update
     *   }
     * })
     */
    upsert<T extends LikedSongUpsertArgs>(args: SelectSubset<T, LikedSongUpsertArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongCountArgs} args - Arguments to filter LikedSongs to count.
     * @example
     * // Count the number of LikedSongs
     * const count = await prisma.likedSong.count({
     *   where: {
     *     // ... the filter for the LikedSongs we want to count
     *   }
     * })
    **/
    count<T extends LikedSongCountArgs>(
      args?: Subset<T, LikedSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedSongAggregateArgs>(args: Subset<T, LikedSongAggregateArgs>): Prisma.PrismaPromise<GetLikedSongAggregateType<T>>

    /**
     * Group by LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedSongGroupByArgs['orderBy'] }
        : { orderBy?: LikedSongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedSong model
   */
  readonly fields: LikedSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedSong model
   */
  interface LikedSongFieldRefs {
    readonly id: FieldRef<"LikedSong", 'String'>
    readonly songId: FieldRef<"LikedSong", 'String'>
    readonly userId: FieldRef<"LikedSong", 'String'>
    readonly likedAt: FieldRef<"LikedSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedSong findUnique
   */
  export type LikedSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong findUniqueOrThrow
   */
  export type LikedSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong findFirst
   */
  export type LikedSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong findFirstOrThrow
   */
  export type LikedSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong findMany
   */
  export type LikedSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong create
   */
  export type LikedSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedSong.
     */
    data: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
  }

  /**
   * LikedSong createMany
   */
  export type LikedSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongCreateManyInput | LikedSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedSong createManyAndReturn
   */
  export type LikedSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongCreateManyInput | LikedSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedSong update
   */
  export type LikedSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedSong.
     */
    data: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
    /**
     * Choose, which LikedSong to update.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong updateMany
   */
  export type LikedSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to update.
     */
    limit?: number
  }

  /**
   * LikedSong updateManyAndReturn
   */
  export type LikedSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedSong upsert
   */
  export type LikedSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedSong to update in case it exists.
     */
    where: LikedSongWhereUniqueInput
    /**
     * In case the LikedSong found by the `where` argument doesn't exist, create a new LikedSong with this data.
     */
    create: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
    /**
     * In case the LikedSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
  }

  /**
   * LikedSong delete
   */
  export type LikedSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter which LikedSong to delete.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong deleteMany
   */
  export type LikedSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSongs to delete
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to delete.
     */
    limit?: number
  }

  /**
   * LikedSong without action
   */
  export type LikedSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
  }


  /**
   * Model LikedAlbum
   */

  export type AggregateLikedAlbum = {
    _count: LikedAlbumCountAggregateOutputType | null
    _min: LikedAlbumMinAggregateOutputType | null
    _max: LikedAlbumMaxAggregateOutputType | null
  }

  export type LikedAlbumMinAggregateOutputType = {
    id: string | null
    albumId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedAlbumMaxAggregateOutputType = {
    id: string | null
    albumId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedAlbumCountAggregateOutputType = {
    id: number
    albumId: number
    userId: number
    likedAt: number
    _all: number
  }


  export type LikedAlbumMinAggregateInputType = {
    id?: true
    albumId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedAlbumMaxAggregateInputType = {
    id?: true
    albumId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedAlbumCountAggregateInputType = {
    id?: true
    albumId?: true
    userId?: true
    likedAt?: true
    _all?: true
  }

  export type LikedAlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbum to aggregate.
     */
    where?: LikedAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedAlbums
    **/
    _count?: true | LikedAlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedAlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedAlbumMaxAggregateInputType
  }

  export type GetLikedAlbumAggregateType<T extends LikedAlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedAlbum[P]>
      : GetScalarType<T[P], AggregateLikedAlbum[P]>
  }




  export type LikedAlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumWhereInput
    orderBy?: LikedAlbumOrderByWithAggregationInput | LikedAlbumOrderByWithAggregationInput[]
    by: LikedAlbumScalarFieldEnum[] | LikedAlbumScalarFieldEnum
    having?: LikedAlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedAlbumCountAggregateInputType | true
    _min?: LikedAlbumMinAggregateInputType
    _max?: LikedAlbumMaxAggregateInputType
  }

  export type LikedAlbumGroupByOutputType = {
    id: string
    albumId: string
    userId: string
    likedAt: Date
    _count: LikedAlbumCountAggregateOutputType | null
    _min: LikedAlbumMinAggregateOutputType | null
    _max: LikedAlbumMaxAggregateOutputType | null
  }

  type GetLikedAlbumGroupByPayload<T extends LikedAlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedAlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedAlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedAlbumGroupByOutputType[P]>
            : GetScalarType<T[P], LikedAlbumGroupByOutputType[P]>
        }
      >
    >


  export type LikedAlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    userId?: boolean
    likedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbum"]>

  export type LikedAlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    userId?: boolean
    likedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbum"]>

  export type LikedAlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    userId?: boolean
    likedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbum"]>

  export type LikedAlbumSelectScalar = {
    id?: boolean
    albumId?: boolean
    userId?: boolean
    likedAt?: boolean
  }

  export type LikedAlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "albumId" | "userId" | "likedAt", ExtArgs["result"]["likedAlbum"]>
  export type LikedAlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedAlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedAlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikedAlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedAlbum"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      albumId: string
      userId: string
      likedAt: Date
    }, ExtArgs["result"]["likedAlbum"]>
    composites: {}
  }

  type LikedAlbumGetPayload<S extends boolean | null | undefined | LikedAlbumDefaultArgs> = $Result.GetResult<Prisma.$LikedAlbumPayload, S>

  type LikedAlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedAlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedAlbumCountAggregateInputType | true
    }

  export interface LikedAlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedAlbum'], meta: { name: 'LikedAlbum' } }
    /**
     * Find zero or one LikedAlbum that matches the filter.
     * @param {LikedAlbumFindUniqueArgs} args - Arguments to find a LikedAlbum
     * @example
     * // Get one LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedAlbumFindUniqueArgs>(args: SelectSubset<T, LikedAlbumFindUniqueArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedAlbum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedAlbumFindUniqueOrThrowArgs} args - Arguments to find a LikedAlbum
     * @example
     * // Get one LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedAlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedAlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedAlbum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumFindFirstArgs} args - Arguments to find a LikedAlbum
     * @example
     * // Get one LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedAlbumFindFirstArgs>(args?: SelectSubset<T, LikedAlbumFindFirstArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedAlbum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumFindFirstOrThrowArgs} args - Arguments to find a LikedAlbum
     * @example
     * // Get one LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedAlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedAlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedAlbums
     * const likedAlbums = await prisma.likedAlbum.findMany()
     * 
     * // Get first 10 LikedAlbums
     * const likedAlbums = await prisma.likedAlbum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedAlbumWithIdOnly = await prisma.likedAlbum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedAlbumFindManyArgs>(args?: SelectSubset<T, LikedAlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedAlbum.
     * @param {LikedAlbumCreateArgs} args - Arguments to create a LikedAlbum.
     * @example
     * // Create one LikedAlbum
     * const LikedAlbum = await prisma.likedAlbum.create({
     *   data: {
     *     // ... data to create a LikedAlbum
     *   }
     * })
     * 
     */
    create<T extends LikedAlbumCreateArgs>(args: SelectSubset<T, LikedAlbumCreateArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedAlbums.
     * @param {LikedAlbumCreateManyArgs} args - Arguments to create many LikedAlbums.
     * @example
     * // Create many LikedAlbums
     * const likedAlbum = await prisma.likedAlbum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedAlbumCreateManyArgs>(args?: SelectSubset<T, LikedAlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedAlbums and returns the data saved in the database.
     * @param {LikedAlbumCreateManyAndReturnArgs} args - Arguments to create many LikedAlbums.
     * @example
     * // Create many LikedAlbums
     * const likedAlbum = await prisma.likedAlbum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedAlbums and only return the `id`
     * const likedAlbumWithIdOnly = await prisma.likedAlbum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedAlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedAlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedAlbum.
     * @param {LikedAlbumDeleteArgs} args - Arguments to delete one LikedAlbum.
     * @example
     * // Delete one LikedAlbum
     * const LikedAlbum = await prisma.likedAlbum.delete({
     *   where: {
     *     // ... filter to delete one LikedAlbum
     *   }
     * })
     * 
     */
    delete<T extends LikedAlbumDeleteArgs>(args: SelectSubset<T, LikedAlbumDeleteArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedAlbum.
     * @param {LikedAlbumUpdateArgs} args - Arguments to update one LikedAlbum.
     * @example
     * // Update one LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedAlbumUpdateArgs>(args: SelectSubset<T, LikedAlbumUpdateArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedAlbums.
     * @param {LikedAlbumDeleteManyArgs} args - Arguments to filter LikedAlbums to delete.
     * @example
     * // Delete a few LikedAlbums
     * const { count } = await prisma.likedAlbum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedAlbumDeleteManyArgs>(args?: SelectSubset<T, LikedAlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedAlbums
     * const likedAlbum = await prisma.likedAlbum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedAlbumUpdateManyArgs>(args: SelectSubset<T, LikedAlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedAlbums and returns the data updated in the database.
     * @param {LikedAlbumUpdateManyAndReturnArgs} args - Arguments to update many LikedAlbums.
     * @example
     * // Update many LikedAlbums
     * const likedAlbum = await prisma.likedAlbum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedAlbums and only return the `id`
     * const likedAlbumWithIdOnly = await prisma.likedAlbum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedAlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedAlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedAlbum.
     * @param {LikedAlbumUpsertArgs} args - Arguments to update or create a LikedAlbum.
     * @example
     * // Update or create a LikedAlbum
     * const likedAlbum = await prisma.likedAlbum.upsert({
     *   create: {
     *     // ... data to create a LikedAlbum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedAlbum we want to update
     *   }
     * })
     */
    upsert<T extends LikedAlbumUpsertArgs>(args: SelectSubset<T, LikedAlbumUpsertArgs<ExtArgs>>): Prisma__LikedAlbumClient<$Result.GetResult<Prisma.$LikedAlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumCountArgs} args - Arguments to filter LikedAlbums to count.
     * @example
     * // Count the number of LikedAlbums
     * const count = await prisma.likedAlbum.count({
     *   where: {
     *     // ... the filter for the LikedAlbums we want to count
     *   }
     * })
    **/
    count<T extends LikedAlbumCountArgs>(
      args?: Subset<T, LikedAlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedAlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedAlbumAggregateArgs>(args: Subset<T, LikedAlbumAggregateArgs>): Prisma.PrismaPromise<GetLikedAlbumAggregateType<T>>

    /**
     * Group by LikedAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedAlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedAlbumGroupByArgs['orderBy'] }
        : { orderBy?: LikedAlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedAlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedAlbum model
   */
  readonly fields: LikedAlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedAlbum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedAlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedAlbum model
   */
  interface LikedAlbumFieldRefs {
    readonly id: FieldRef<"LikedAlbum", 'String'>
    readonly albumId: FieldRef<"LikedAlbum", 'String'>
    readonly userId: FieldRef<"LikedAlbum", 'String'>
    readonly likedAt: FieldRef<"LikedAlbum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedAlbum findUnique
   */
  export type LikedAlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbum to fetch.
     */
    where: LikedAlbumWhereUniqueInput
  }

  /**
   * LikedAlbum findUniqueOrThrow
   */
  export type LikedAlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbum to fetch.
     */
    where: LikedAlbumWhereUniqueInput
  }

  /**
   * LikedAlbum findFirst
   */
  export type LikedAlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbum to fetch.
     */
    where?: LikedAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumScalarFieldEnum | LikedAlbumScalarFieldEnum[]
  }

  /**
   * LikedAlbum findFirstOrThrow
   */
  export type LikedAlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbum to fetch.
     */
    where?: LikedAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumScalarFieldEnum | LikedAlbumScalarFieldEnum[]
  }

  /**
   * LikedAlbum findMany
   */
  export type LikedAlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumOrderByWithRelationInput | LikedAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedAlbums.
     */
    cursor?: LikedAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    distinct?: LikedAlbumScalarFieldEnum | LikedAlbumScalarFieldEnum[]
  }

  /**
   * LikedAlbum create
   */
  export type LikedAlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedAlbum.
     */
    data: XOR<LikedAlbumCreateInput, LikedAlbumUncheckedCreateInput>
  }

  /**
   * LikedAlbum createMany
   */
  export type LikedAlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumCreateManyInput | LikedAlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedAlbum createManyAndReturn
   */
  export type LikedAlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumCreateManyInput | LikedAlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedAlbum update
   */
  export type LikedAlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedAlbum.
     */
    data: XOR<LikedAlbumUpdateInput, LikedAlbumUncheckedUpdateInput>
    /**
     * Choose, which LikedAlbum to update.
     */
    where: LikedAlbumWhereUniqueInput
  }

  /**
   * LikedAlbum updateMany
   */
  export type LikedAlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedAlbums.
     */
    data: XOR<LikedAlbumUpdateManyMutationInput, LikedAlbumUncheckedUpdateManyInput>
    /**
     * Filter which LikedAlbums to update
     */
    where?: LikedAlbumWhereInput
    /**
     * Limit how many LikedAlbums to update.
     */
    limit?: number
  }

  /**
   * LikedAlbum updateManyAndReturn
   */
  export type LikedAlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * The data used to update LikedAlbums.
     */
    data: XOR<LikedAlbumUpdateManyMutationInput, LikedAlbumUncheckedUpdateManyInput>
    /**
     * Filter which LikedAlbums to update
     */
    where?: LikedAlbumWhereInput
    /**
     * Limit how many LikedAlbums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedAlbum upsert
   */
  export type LikedAlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedAlbum to update in case it exists.
     */
    where: LikedAlbumWhereUniqueInput
    /**
     * In case the LikedAlbum found by the `where` argument doesn't exist, create a new LikedAlbum with this data.
     */
    create: XOR<LikedAlbumCreateInput, LikedAlbumUncheckedCreateInput>
    /**
     * In case the LikedAlbum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedAlbumUpdateInput, LikedAlbumUncheckedUpdateInput>
  }

  /**
   * LikedAlbum delete
   */
  export type LikedAlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
    /**
     * Filter which LikedAlbum to delete.
     */
    where: LikedAlbumWhereUniqueInput
  }

  /**
   * LikedAlbum deleteMany
   */
  export type LikedAlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to delete
     */
    where?: LikedAlbumWhereInput
    /**
     * Limit how many LikedAlbums to delete.
     */
    limit?: number
  }

  /**
   * LikedAlbum without action
   */
  export type LikedAlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbum
     */
    select?: LikedAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedAlbum
     */
    omit?: LikedAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumInclude<ExtArgs> | null
  }


  /**
   * Model LikedPlaylist
   */

  export type AggregateLikedPlaylist = {
    _count: LikedPlaylistCountAggregateOutputType | null
    _min: LikedPlaylistMinAggregateOutputType | null
    _max: LikedPlaylistMaxAggregateOutputType | null
  }

  export type LikedPlaylistMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedPlaylistMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type LikedPlaylistCountAggregateOutputType = {
    id: number
    playlistId: number
    userId: number
    likedAt: number
    _all: number
  }


  export type LikedPlaylistMinAggregateInputType = {
    id?: true
    playlistId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedPlaylistMaxAggregateInputType = {
    id?: true
    playlistId?: true
    userId?: true
    likedAt?: true
  }

  export type LikedPlaylistCountAggregateInputType = {
    id?: true
    playlistId?: true
    userId?: true
    likedAt?: true
    _all?: true
  }

  export type LikedPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPlaylist to aggregate.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedPlaylists
    **/
    _count?: true | LikedPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedPlaylistMaxAggregateInputType
  }

  export type GetLikedPlaylistAggregateType<T extends LikedPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedPlaylist[P]>
      : GetScalarType<T[P], AggregateLikedPlaylist[P]>
  }




  export type LikedPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithAggregationInput | LikedPlaylistOrderByWithAggregationInput[]
    by: LikedPlaylistScalarFieldEnum[] | LikedPlaylistScalarFieldEnum
    having?: LikedPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedPlaylistCountAggregateInputType | true
    _min?: LikedPlaylistMinAggregateInputType
    _max?: LikedPlaylistMaxAggregateInputType
  }

  export type LikedPlaylistGroupByOutputType = {
    id: string
    playlistId: string
    userId: string
    likedAt: Date
    _count: LikedPlaylistCountAggregateOutputType | null
    _min: LikedPlaylistMinAggregateOutputType | null
    _max: LikedPlaylistMaxAggregateOutputType | null
  }

  type GetLikedPlaylistGroupByPayload<T extends LikedPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], LikedPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type LikedPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    userId?: boolean
    likedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedPlaylist"]>

  export type LikedPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    userId?: boolean
    likedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedPlaylist"]>

  export type LikedPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    userId?: boolean
    likedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedPlaylist"]>

  export type LikedPlaylistSelectScalar = {
    id?: boolean
    playlistId?: boolean
    userId?: boolean
    likedAt?: boolean
  }

  export type LikedPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "userId" | "likedAt", ExtArgs["result"]["likedPlaylist"]>
  export type LikedPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikedPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedPlaylist"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      userId: string
      likedAt: Date
    }, ExtArgs["result"]["likedPlaylist"]>
    composites: {}
  }

  type LikedPlaylistGetPayload<S extends boolean | null | undefined | LikedPlaylistDefaultArgs> = $Result.GetResult<Prisma.$LikedPlaylistPayload, S>

  type LikedPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedPlaylistCountAggregateInputType | true
    }

  export interface LikedPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedPlaylist'], meta: { name: 'LikedPlaylist' } }
    /**
     * Find zero or one LikedPlaylist that matches the filter.
     * @param {LikedPlaylistFindUniqueArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedPlaylistFindUniqueArgs>(args: SelectSubset<T, LikedPlaylistFindUniqueArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedPlaylistFindUniqueOrThrowArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindFirstArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedPlaylistFindFirstArgs>(args?: SelectSubset<T, LikedPlaylistFindFirstArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindFirstOrThrowArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedPlaylists
     * const likedPlaylists = await prisma.likedPlaylist.findMany()
     * 
     * // Get first 10 LikedPlaylists
     * const likedPlaylists = await prisma.likedPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedPlaylistWithIdOnly = await prisma.likedPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedPlaylistFindManyArgs>(args?: SelectSubset<T, LikedPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedPlaylist.
     * @param {LikedPlaylistCreateArgs} args - Arguments to create a LikedPlaylist.
     * @example
     * // Create one LikedPlaylist
     * const LikedPlaylist = await prisma.likedPlaylist.create({
     *   data: {
     *     // ... data to create a LikedPlaylist
     *   }
     * })
     * 
     */
    create<T extends LikedPlaylistCreateArgs>(args: SelectSubset<T, LikedPlaylistCreateArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedPlaylists.
     * @param {LikedPlaylistCreateManyArgs} args - Arguments to create many LikedPlaylists.
     * @example
     * // Create many LikedPlaylists
     * const likedPlaylist = await prisma.likedPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedPlaylistCreateManyArgs>(args?: SelectSubset<T, LikedPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedPlaylists and returns the data saved in the database.
     * @param {LikedPlaylistCreateManyAndReturnArgs} args - Arguments to create many LikedPlaylists.
     * @example
     * // Create many LikedPlaylists
     * const likedPlaylist = await prisma.likedPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedPlaylists and only return the `id`
     * const likedPlaylistWithIdOnly = await prisma.likedPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedPlaylist.
     * @param {LikedPlaylistDeleteArgs} args - Arguments to delete one LikedPlaylist.
     * @example
     * // Delete one LikedPlaylist
     * const LikedPlaylist = await prisma.likedPlaylist.delete({
     *   where: {
     *     // ... filter to delete one LikedPlaylist
     *   }
     * })
     * 
     */
    delete<T extends LikedPlaylistDeleteArgs>(args: SelectSubset<T, LikedPlaylistDeleteArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedPlaylist.
     * @param {LikedPlaylistUpdateArgs} args - Arguments to update one LikedPlaylist.
     * @example
     * // Update one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedPlaylistUpdateArgs>(args: SelectSubset<T, LikedPlaylistUpdateArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedPlaylists.
     * @param {LikedPlaylistDeleteManyArgs} args - Arguments to filter LikedPlaylists to delete.
     * @example
     * // Delete a few LikedPlaylists
     * const { count } = await prisma.likedPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedPlaylistDeleteManyArgs>(args?: SelectSubset<T, LikedPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedPlaylists
     * const likedPlaylist = await prisma.likedPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedPlaylistUpdateManyArgs>(args: SelectSubset<T, LikedPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedPlaylists and returns the data updated in the database.
     * @param {LikedPlaylistUpdateManyAndReturnArgs} args - Arguments to update many LikedPlaylists.
     * @example
     * // Update many LikedPlaylists
     * const likedPlaylist = await prisma.likedPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedPlaylists and only return the `id`
     * const likedPlaylistWithIdOnly = await prisma.likedPlaylist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedPlaylist.
     * @param {LikedPlaylistUpsertArgs} args - Arguments to update or create a LikedPlaylist.
     * @example
     * // Update or create a LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.upsert({
     *   create: {
     *     // ... data to create a LikedPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends LikedPlaylistUpsertArgs>(args: SelectSubset<T, LikedPlaylistUpsertArgs<ExtArgs>>): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistCountArgs} args - Arguments to filter LikedPlaylists to count.
     * @example
     * // Count the number of LikedPlaylists
     * const count = await prisma.likedPlaylist.count({
     *   where: {
     *     // ... the filter for the LikedPlaylists we want to count
     *   }
     * })
    **/
    count<T extends LikedPlaylistCountArgs>(
      args?: Subset<T, LikedPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedPlaylistAggregateArgs>(args: Subset<T, LikedPlaylistAggregateArgs>): Prisma.PrismaPromise<GetLikedPlaylistAggregateType<T>>

    /**
     * Group by LikedPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: LikedPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedPlaylist model
   */
  readonly fields: LikedPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedPlaylist model
   */
  interface LikedPlaylistFieldRefs {
    readonly id: FieldRef<"LikedPlaylist", 'String'>
    readonly playlistId: FieldRef<"LikedPlaylist", 'String'>
    readonly userId: FieldRef<"LikedPlaylist", 'String'>
    readonly likedAt: FieldRef<"LikedPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedPlaylist findUnique
   */
  export type LikedPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where: LikedPlaylistWhereUniqueInput
  }

  /**
   * LikedPlaylist findUniqueOrThrow
   */
  export type LikedPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where: LikedPlaylistWhereUniqueInput
  }

  /**
   * LikedPlaylist findFirst
   */
  export type LikedPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPlaylists.
     */
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }

  /**
   * LikedPlaylist findFirstOrThrow
   */
  export type LikedPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPlaylists.
     */
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }

  /**
   * LikedPlaylist findMany
   */
  export type LikedPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylists to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }

  /**
   * LikedPlaylist create
   */
  export type LikedPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedPlaylist.
     */
    data: XOR<LikedPlaylistCreateInput, LikedPlaylistUncheckedCreateInput>
  }

  /**
   * LikedPlaylist createMany
   */
  export type LikedPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedPlaylists.
     */
    data: LikedPlaylistCreateManyInput | LikedPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedPlaylist createManyAndReturn
   */
  export type LikedPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many LikedPlaylists.
     */
    data: LikedPlaylistCreateManyInput | LikedPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedPlaylist update
   */
  export type LikedPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedPlaylist.
     */
    data: XOR<LikedPlaylistUpdateInput, LikedPlaylistUncheckedUpdateInput>
    /**
     * Choose, which LikedPlaylist to update.
     */
    where: LikedPlaylistWhereUniqueInput
  }

  /**
   * LikedPlaylist updateMany
   */
  export type LikedPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedPlaylists.
     */
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which LikedPlaylists to update
     */
    where?: LikedPlaylistWhereInput
    /**
     * Limit how many LikedPlaylists to update.
     */
    limit?: number
  }

  /**
   * LikedPlaylist updateManyAndReturn
   */
  export type LikedPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update LikedPlaylists.
     */
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which LikedPlaylists to update
     */
    where?: LikedPlaylistWhereInput
    /**
     * Limit how many LikedPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedPlaylist upsert
   */
  export type LikedPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedPlaylist to update in case it exists.
     */
    where: LikedPlaylistWhereUniqueInput
    /**
     * In case the LikedPlaylist found by the `where` argument doesn't exist, create a new LikedPlaylist with this data.
     */
    create: XOR<LikedPlaylistCreateInput, LikedPlaylistUncheckedCreateInput>
    /**
     * In case the LikedPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedPlaylistUpdateInput, LikedPlaylistUncheckedUpdateInput>
  }

  /**
   * LikedPlaylist delete
   */
  export type LikedPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter which LikedPlaylist to delete.
     */
    where: LikedPlaylistWhereUniqueInput
  }

  /**
   * LikedPlaylist deleteMany
   */
  export type LikedPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPlaylists to delete
     */
    where?: LikedPlaylistWhereInput
    /**
     * Limit how many LikedPlaylists to delete.
     */
    limit?: number
  }

  /**
   * LikedPlaylist without action
   */
  export type LikedPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedPlaylist
     */
    omit?: LikedPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    role: 'role',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    bio: 'bio',
    coverImage: 'coverImage',
    monthlyListeners: 'monthlyListeners',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    lyrics: 'lyrics',
    duration: 'duration',
    releaseDate: 'releaseDate',
    playCount: 'playCount',
    isExplicit: 'isExplicit',
    audioUrl: 'audioUrl',
    coverImage: 'coverImage',
    albumId: 'albumId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    slug: 'slug',
    type: 'type',
    duration: 'duration',
    releaseDate: 'releaseDate',
    playCount: 'playCount',
    coverImage: 'coverImage',
    isExplicit: 'isExplicit',
    artistId: 'artistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    slug: 'slug',
    duration: 'duration',
    releaseDate: 'releaseDate',
    type: 'type',
    coverImage: 'coverImage',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slug: 'slug',
    songCount: 'songCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const PlayHistoryScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    userId: 'userId',
    playedAt: 'playedAt'
  };

  export type PlayHistoryScalarFieldEnum = (typeof PlayHistoryScalarFieldEnum)[keyof typeof PlayHistoryScalarFieldEnum]


  export const LikedSongScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    userId: 'userId',
    likedAt: 'likedAt'
  };

  export type LikedSongScalarFieldEnum = (typeof LikedSongScalarFieldEnum)[keyof typeof LikedSongScalarFieldEnum]


  export const LikedAlbumScalarFieldEnum: {
    id: 'id',
    albumId: 'albumId',
    userId: 'userId',
    likedAt: 'likedAt'
  };

  export type LikedAlbumScalarFieldEnum = (typeof LikedAlbumScalarFieldEnum)[keyof typeof LikedAlbumScalarFieldEnum]


  export const LikedPlaylistScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    userId: 'userId',
    likedAt: 'likedAt'
  };

  export type LikedPlaylistScalarFieldEnum = (typeof LikedPlaylistScalarFieldEnum)[keyof typeof LikedPlaylistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AlbumType'
   */
  export type EnumAlbumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlbumType'>
    


  /**
   * Reference to a field of type 'AlbumType[]'
   */
  export type ListEnumAlbumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlbumType[]'>
    


  /**
   * Reference to a field of type 'PlaylistType'
   */
  export type EnumPlaylistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistType'>
    


  /**
   * Reference to a field of type 'PlaylistType[]'
   */
  export type ListEnumPlaylistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    following?: ArtistListRelationFilter
    playlists?: PlaylistListRelationFilter
    playHistory?: PlayHistoryListRelationFilter
    likedSongs?: LikedSongListRelationFilter
    likedAlbums?: LikedAlbumListRelationFilter
    likedPlaylists?: LikedPlaylistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    following?: ArtistOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    playHistory?: PlayHistoryOrderByRelationAggregateInput
    likedSongs?: LikedSongOrderByRelationAggregateInput
    likedAlbums?: LikedAlbumOrderByRelationAggregateInput
    likedPlaylists?: LikedPlaylistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    following?: ArtistListRelationFilter
    playlists?: PlaylistListRelationFilter
    playHistory?: PlayHistoryListRelationFilter
    likedSongs?: LikedSongListRelationFilter
    likedAlbums?: LikedAlbumListRelationFilter
    likedPlaylists?: LikedPlaylistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    slug?: StringFilter<"Artist"> | string
    bio?: StringNullableFilter<"Artist"> | string | null
    coverImage?: StringNullableFilter<"Artist"> | string | null
    monthlyListeners?: IntFilter<"Artist"> | number
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    followers?: UserListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    albums?: AlbumOrderByRelationAggregateInput
    followers?: UserOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    bio?: StringNullableFilter<"Artist"> | string | null
    coverImage?: StringNullableFilter<"Artist"> | string | null
    monthlyListeners?: IntFilter<"Artist"> | number
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    followers?: UserListRelationFilter
  }, "id" | "slug">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    slug?: StringWithAggregatesFilter<"Artist"> | string
    bio?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    monthlyListeners?: IntWithAggregatesFilter<"Artist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    slug?: StringFilter<"Song"> | string
    lyrics?: StringNullableFilter<"Song"> | string | null
    duration?: IntFilter<"Song"> | number
    releaseDate?: DateTimeNullableFilter<"Song"> | Date | string | null
    playCount?: IntFilter<"Song"> | number
    isExplicit?: BoolFilter<"Song"> | boolean
    audioUrl?: StringFilter<"Song"> | string
    coverImage?: StringNullableFilter<"Song"> | string | null
    albumId?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    artists?: ArtistListRelationFilter
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    genres?: GenreListRelationFilter
    playlists?: PlaylistListRelationFilter
    playHistory?: PlayHistoryListRelationFilter
    likedBy?: LikedSongListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    playCount?: SortOrder
    isExplicit?: SortOrder
    audioUrl?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artists?: ArtistOrderByRelationAggregateInput
    album?: AlbumOrderByWithRelationInput
    genres?: GenreOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    playHistory?: PlayHistoryOrderByRelationAggregateInput
    likedBy?: LikedSongOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    lyrics?: StringNullableFilter<"Song"> | string | null
    duration?: IntFilter<"Song"> | number
    releaseDate?: DateTimeNullableFilter<"Song"> | Date | string | null
    playCount?: IntFilter<"Song"> | number
    isExplicit?: BoolFilter<"Song"> | boolean
    audioUrl?: StringFilter<"Song"> | string
    coverImage?: StringNullableFilter<"Song"> | string | null
    albumId?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    artists?: ArtistListRelationFilter
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    genres?: GenreListRelationFilter
    playlists?: PlaylistListRelationFilter
    playHistory?: PlayHistoryListRelationFilter
    likedBy?: LikedSongListRelationFilter
  }, "id" | "slug">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    playCount?: SortOrder
    isExplicit?: SortOrder
    audioUrl?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    slug?: StringWithAggregatesFilter<"Song"> | string
    lyrics?: StringNullableWithAggregatesFilter<"Song"> | string | null
    duration?: IntWithAggregatesFilter<"Song"> | number
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Song"> | Date | string | null
    playCount?: IntWithAggregatesFilter<"Song"> | number
    isExplicit?: BoolWithAggregatesFilter<"Song"> | boolean
    audioUrl?: StringWithAggregatesFilter<"Song"> | string
    coverImage?: StringNullableWithAggregatesFilter<"Song"> | string | null
    albumId?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    slug?: StringFilter<"Album"> | string
    type?: EnumAlbumTypeFilter<"Album"> | $Enums.AlbumType
    duration?: IntFilter<"Album"> | number
    releaseDate?: DateTimeNullableFilter<"Album"> | Date | string | null
    playCount?: IntFilter<"Album"> | number
    coverImage?: StringNullableFilter<"Album"> | string | null
    isExplicit?: BoolFilter<"Album"> | boolean
    artistId?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    likedBy?: LikedAlbumListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    playCount?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    isExplicit?: SortOrder
    artistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    artist?: ArtistOrderByWithRelationInput
    likedBy?: LikedAlbumOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    type?: EnumAlbumTypeFilter<"Album"> | $Enums.AlbumType
    duration?: IntFilter<"Album"> | number
    releaseDate?: DateTimeNullableFilter<"Album"> | Date | string | null
    playCount?: IntFilter<"Album"> | number
    coverImage?: StringNullableFilter<"Album"> | string | null
    isExplicit?: BoolFilter<"Album"> | boolean
    artistId?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistNullableScalarRelationFilter, ArtistWhereInput> | null
    likedBy?: LikedAlbumListRelationFilter
  }, "id" | "slug">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    playCount?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    isExplicit?: SortOrder
    artistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
    description?: StringNullableWithAggregatesFilter<"Album"> | string | null
    slug?: StringWithAggregatesFilter<"Album"> | string
    type?: EnumAlbumTypeWithAggregatesFilter<"Album"> | $Enums.AlbumType
    duration?: IntWithAggregatesFilter<"Album"> | number
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Album"> | Date | string | null
    playCount?: IntWithAggregatesFilter<"Album"> | number
    coverImage?: StringNullableWithAggregatesFilter<"Album"> | string | null
    isExplicit?: BoolWithAggregatesFilter<"Album"> | boolean
    artistId?: StringNullableWithAggregatesFilter<"Album"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    slug?: StringFilter<"Playlist"> | string
    duration?: IntFilter<"Playlist"> | number
    releaseDate?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverImage?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    songs?: SongListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    likedBy?: LikedPlaylistListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    type?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    likedBy?: LikedPlaylistOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    duration?: IntFilter<"Playlist"> | number
    releaseDate?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverImage?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    songs?: SongListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    likedBy?: LikedPlaylistListRelationFilter
  }, "id" | "slug">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    type?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    slug?: StringWithAggregatesFilter<"Playlist"> | string
    duration?: IntWithAggregatesFilter<"Playlist"> | number
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Playlist"> | Date | string | null
    type?: EnumPlaylistTypeWithAggregatesFilter<"Playlist"> | $Enums.PlaylistType
    coverImage?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    description?: StringNullableFilter<"Genre"> | string | null
    slug?: StringFilter<"Genre"> | string
    songCount?: IntFilter<"Genre"> | number
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    songs?: SongListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    songCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    description?: StringNullableFilter<"Genre"> | string | null
    songCount?: IntFilter<"Genre"> | number
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    songs?: SongListRelationFilter
  }, "id" | "name" | "slug">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    songCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    description?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    slug?: StringWithAggregatesFilter<"Genre"> | string
    songCount?: IntWithAggregatesFilter<"Genre"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type PlayHistoryWhereInput = {
    AND?: PlayHistoryWhereInput | PlayHistoryWhereInput[]
    OR?: PlayHistoryWhereInput[]
    NOT?: PlayHistoryWhereInput | PlayHistoryWhereInput[]
    id?: StringFilter<"PlayHistory"> | string
    songId?: StringFilter<"PlayHistory"> | string
    userId?: StringFilter<"PlayHistory"> | string
    playedAt?: DateTimeFilter<"PlayHistory"> | Date | string
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayHistoryOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    playedAt?: SortOrder
    song?: SongOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PlayHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayHistoryWhereInput | PlayHistoryWhereInput[]
    OR?: PlayHistoryWhereInput[]
    NOT?: PlayHistoryWhereInput | PlayHistoryWhereInput[]
    songId?: StringFilter<"PlayHistory"> | string
    userId?: StringFilter<"PlayHistory"> | string
    playedAt?: DateTimeFilter<"PlayHistory"> | Date | string
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    playedAt?: SortOrder
    _count?: PlayHistoryCountOrderByAggregateInput
    _max?: PlayHistoryMaxOrderByAggregateInput
    _min?: PlayHistoryMinOrderByAggregateInput
  }

  export type PlayHistoryScalarWhereWithAggregatesInput = {
    AND?: PlayHistoryScalarWhereWithAggregatesInput | PlayHistoryScalarWhereWithAggregatesInput[]
    OR?: PlayHistoryScalarWhereWithAggregatesInput[]
    NOT?: PlayHistoryScalarWhereWithAggregatesInput | PlayHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayHistory"> | string
    songId?: StringWithAggregatesFilter<"PlayHistory"> | string
    userId?: StringWithAggregatesFilter<"PlayHistory"> | string
    playedAt?: DateTimeWithAggregatesFilter<"PlayHistory"> | Date | string
  }

  export type LikedSongWhereInput = {
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    id?: StringFilter<"LikedSong"> | string
    songId?: StringFilter<"LikedSong"> | string
    userId?: StringFilter<"LikedSong"> | string
    likedAt?: DateTimeFilter<"LikedSong"> | Date | string
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikedSongOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    song?: SongOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikedSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_songId?: LikedSongUserIdSongIdCompoundUniqueInput
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    songId?: StringFilter<"LikedSong"> | string
    userId?: StringFilter<"LikedSong"> | string
    likedAt?: DateTimeFilter<"LikedSong"> | Date | string
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_songId">

  export type LikedSongOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    _count?: LikedSongCountOrderByAggregateInput
    _max?: LikedSongMaxOrderByAggregateInput
    _min?: LikedSongMinOrderByAggregateInput
  }

  export type LikedSongScalarWhereWithAggregatesInput = {
    AND?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    OR?: LikedSongScalarWhereWithAggregatesInput[]
    NOT?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedSong"> | string
    songId?: StringWithAggregatesFilter<"LikedSong"> | string
    userId?: StringWithAggregatesFilter<"LikedSong"> | string
    likedAt?: DateTimeWithAggregatesFilter<"LikedSong"> | Date | string
  }

  export type LikedAlbumWhereInput = {
    AND?: LikedAlbumWhereInput | LikedAlbumWhereInput[]
    OR?: LikedAlbumWhereInput[]
    NOT?: LikedAlbumWhereInput | LikedAlbumWhereInput[]
    id?: StringFilter<"LikedAlbum"> | string
    albumId?: StringFilter<"LikedAlbum"> | string
    userId?: StringFilter<"LikedAlbum"> | string
    likedAt?: DateTimeFilter<"LikedAlbum"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikedAlbumOrderByWithRelationInput = {
    id?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    album?: AlbumOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikedAlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_albumId?: LikedAlbumUserIdAlbumIdCompoundUniqueInput
    AND?: LikedAlbumWhereInput | LikedAlbumWhereInput[]
    OR?: LikedAlbumWhereInput[]
    NOT?: LikedAlbumWhereInput | LikedAlbumWhereInput[]
    albumId?: StringFilter<"LikedAlbum"> | string
    userId?: StringFilter<"LikedAlbum"> | string
    likedAt?: DateTimeFilter<"LikedAlbum"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_albumId">

  export type LikedAlbumOrderByWithAggregationInput = {
    id?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    _count?: LikedAlbumCountOrderByAggregateInput
    _max?: LikedAlbumMaxOrderByAggregateInput
    _min?: LikedAlbumMinOrderByAggregateInput
  }

  export type LikedAlbumScalarWhereWithAggregatesInput = {
    AND?: LikedAlbumScalarWhereWithAggregatesInput | LikedAlbumScalarWhereWithAggregatesInput[]
    OR?: LikedAlbumScalarWhereWithAggregatesInput[]
    NOT?: LikedAlbumScalarWhereWithAggregatesInput | LikedAlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedAlbum"> | string
    albumId?: StringWithAggregatesFilter<"LikedAlbum"> | string
    userId?: StringWithAggregatesFilter<"LikedAlbum"> | string
    likedAt?: DateTimeWithAggregatesFilter<"LikedAlbum"> | Date | string
  }

  export type LikedPlaylistWhereInput = {
    AND?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    OR?: LikedPlaylistWhereInput[]
    NOT?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    id?: StringFilter<"LikedPlaylist"> | string
    playlistId?: StringFilter<"LikedPlaylist"> | string
    userId?: StringFilter<"LikedPlaylist"> | string
    likedAt?: DateTimeFilter<"LikedPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikedPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikedPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_playlistId?: LikedPlaylistUserIdPlaylistIdCompoundUniqueInput
    AND?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    OR?: LikedPlaylistWhereInput[]
    NOT?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    playlistId?: StringFilter<"LikedPlaylist"> | string
    userId?: StringFilter<"LikedPlaylist"> | string
    likedAt?: DateTimeFilter<"LikedPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_playlistId">

  export type LikedPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
    _count?: LikedPlaylistCountOrderByAggregateInput
    _max?: LikedPlaylistMaxOrderByAggregateInput
    _min?: LikedPlaylistMinOrderByAggregateInput
  }

  export type LikedPlaylistScalarWhereWithAggregatesInput = {
    AND?: LikedPlaylistScalarWhereWithAggregatesInput | LikedPlaylistScalarWhereWithAggregatesInput[]
    OR?: LikedPlaylistScalarWhereWithAggregatesInput[]
    NOT?: LikedPlaylistScalarWhereWithAggregatesInput | LikedPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedPlaylist"> | string
    playlistId?: StringWithAggregatesFilter<"LikedPlaylist"> | string
    userId?: StringWithAggregatesFilter<"LikedPlaylist"> | string
    likedAt?: DateTimeWithAggregatesFilter<"LikedPlaylist"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album: AlbumCreateNestedOneWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    likedBy?: LikedAlbumCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    artistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
    likedBy?: LikedAlbumUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    likedBy?: LikedAlbumUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    likedBy?: LikedAlbumUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    artistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    user?: UserCreateNestedOneWithoutPlaylistsInput
    likedBy?: LikedPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
    likedBy?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    user?: UserUpdateOneWithoutPlaylistsNestedInput
    likedBy?: LikedPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
    likedBy?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    songCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    songCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    songCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryCreateInput = {
    id?: string
    playedAt?: Date | string
    song: SongCreateNestedOneWithoutPlayHistoryInput
    user: UserCreateNestedOneWithoutPlayHistoryInput
  }

  export type PlayHistoryUncheckedCreateInput = {
    id?: string
    songId: string
    userId: string
    playedAt?: Date | string
  }

  export type PlayHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutPlayHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutPlayHistoryNestedInput
  }

  export type PlayHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryCreateManyInput = {
    id?: string
    songId: string
    userId: string
    playedAt?: Date | string
  }

  export type PlayHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongCreateInput = {
    id?: string
    likedAt?: Date | string
    song: SongCreateNestedOneWithoutLikedByInput
    user: UserCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongUncheckedCreateInput = {
    id?: string
    songId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutLikedByNestedInput
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongCreateManyInput = {
    id?: string
    songId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumCreateInput = {
    id?: string
    likedAt?: Date | string
    album: AlbumCreateNestedOneWithoutLikedByInput
    user: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumUncheckedCreateInput = {
    id?: string
    albumId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedAlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutLikedByNestedInput
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumCreateManyInput = {
    id?: string
    albumId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedAlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistCreateInput = {
    id?: string
    likedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutLikedByInput
    user: UserCreateNestedOneWithoutLikedPlaylistsInput
  }

  export type LikedPlaylistUncheckedCreateInput = {
    id?: string
    playlistId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutLikedByNestedInput
    user?: UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput
  }

  export type LikedPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistCreateManyInput = {
    id?: string
    playlistId: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArtistListRelationFilter = {
    every?: ArtistWhereInput
    some?: ArtistWhereInput
    none?: ArtistWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type PlayHistoryListRelationFilter = {
    every?: PlayHistoryWhereInput
    some?: PlayHistoryWhereInput
    none?: PlayHistoryWhereInput
  }

  export type LikedSongListRelationFilter = {
    every?: LikedSongWhereInput
    some?: LikedSongWhereInput
    none?: LikedSongWhereInput
  }

  export type LikedAlbumListRelationFilter = {
    every?: LikedAlbumWhereInput
    some?: LikedAlbumWhereInput
    none?: LikedAlbumWhereInput
  }

  export type LikedPlaylistListRelationFilter = {
    every?: LikedPlaylistWhereInput
    some?: LikedPlaylistWhereInput
    none?: LikedPlaylistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedAlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    coverImage?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    monthlyListeners?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    coverImage?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    coverImage?: SortOrder
    monthlyListeners?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    monthlyListeners?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    lyrics?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    isExplicit?: SortOrder
    audioUrl?: SortOrder
    coverImage?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    duration?: SortOrder
    playCount?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    lyrics?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    isExplicit?: SortOrder
    audioUrl?: SortOrder
    coverImage?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    lyrics?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    isExplicit?: SortOrder
    audioUrl?: SortOrder
    coverImage?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    duration?: SortOrder
    playCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAlbumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlbumType | EnumAlbumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlbumTypeFilter<$PrismaModel> | $Enums.AlbumType
  }

  export type ArtistNullableScalarRelationFilter = {
    is?: ArtistWhereInput | null
    isNot?: ArtistWhereInput | null
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    coverImage?: SortOrder
    isExplicit?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    duration?: SortOrder
    playCount?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    coverImage?: SortOrder
    isExplicit?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    playCount?: SortOrder
    coverImage?: SortOrder
    isExplicit?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    duration?: SortOrder
    playCount?: SortOrder
  }

  export type EnumAlbumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlbumType | EnumAlbumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlbumTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlbumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlbumTypeFilter<$PrismaModel>
    _max?: NestedEnumAlbumTypeFilter<$PrismaModel>
  }

  export type EnumPlaylistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeFilter<$PrismaModel> | $Enums.PlaylistType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    type?: SortOrder
    coverImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    type?: SortOrder
    coverImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    duration?: SortOrder
    releaseDate?: SortOrder
    type?: SortOrder
    coverImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumPlaylistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistTypeFilter<$PrismaModel>
    _max?: NestedEnumPlaylistTypeFilter<$PrismaModel>
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    songCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    songCount?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    songCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    songCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    songCount?: SortOrder
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    playedAt?: SortOrder
  }

  export type PlayHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    playedAt?: SortOrder
  }

  export type PlayHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    playedAt?: SortOrder
  }

  export type LikedSongUserIdSongIdCompoundUniqueInput = {
    userId: string
    songId: string
  }

  export type LikedSongCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedSongMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedSongMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedAlbumUserIdAlbumIdCompoundUniqueInput = {
    userId: string
    albumId: string
  }

  export type LikedAlbumCountOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedAlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedAlbumMinOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type LikedPlaylistUserIdPlaylistIdCompoundUniqueInput = {
    userId: string
    playlistId: string
  }

  export type LikedPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type ArtistCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlayHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput> | PlayHistoryCreateWithoutUserInput[] | PlayHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutUserInput | PlayHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PlayHistoryCreateManyUserInputEnvelope
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
  }

  export type LikedSongCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type LikedAlbumCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput> | LikedAlbumCreateWithoutUserInput[] | LikedAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutUserInput | LikedAlbumCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumCreateManyUserInputEnvelope
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
  }

  export type LikedPlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlayHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput> | PlayHistoryCreateWithoutUserInput[] | PlayHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutUserInput | PlayHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PlayHistoryCreateManyUserInputEnvelope
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type LikedAlbumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput> | LikedAlbumCreateWithoutUserInput[] | LikedAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutUserInput | LikedAlbumCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumCreateManyUserInputEnvelope
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
  }

  export type LikedPlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtistUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowersInput | ArtistUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowersInput | ArtistUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowersInput | ArtistUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlayHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput> | PlayHistoryCreateWithoutUserInput[] | PlayHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutUserInput | PlayHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PlayHistoryUpsertWithWhereUniqueWithoutUserInput | PlayHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayHistoryCreateManyUserInputEnvelope
    set?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    disconnect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    delete?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    update?: PlayHistoryUpdateWithWhereUniqueWithoutUserInput | PlayHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayHistoryUpdateManyWithWhereWithoutUserInput | PlayHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
  }

  export type LikedSongUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type LikedAlbumUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput> | LikedAlbumCreateWithoutUserInput[] | LikedAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutUserInput | LikedAlbumCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumUpsertWithWhereUniqueWithoutUserInput | LikedAlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumCreateManyUserInputEnvelope
    set?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    disconnect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    delete?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    update?: LikedAlbumUpdateWithWhereUniqueWithoutUserInput | LikedAlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumUpdateManyWithWhereWithoutUserInput | LikedAlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
  }

  export type LikedPlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutUserInput | LikedPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutUserInput | LikedPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutUserInput | LikedPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowersInput | ArtistUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowersInput | ArtistUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowersInput | ArtistUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlayHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput> | PlayHistoryCreateWithoutUserInput[] | PlayHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutUserInput | PlayHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PlayHistoryUpsertWithWhereUniqueWithoutUserInput | PlayHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayHistoryCreateManyUserInputEnvelope
    set?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    disconnect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    delete?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    update?: PlayHistoryUpdateWithWhereUniqueWithoutUserInput | PlayHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayHistoryUpdateManyWithWhereWithoutUserInput | PlayHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type LikedAlbumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput> | LikedAlbumCreateWithoutUserInput[] | LikedAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutUserInput | LikedAlbumCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumUpsertWithWhereUniqueWithoutUserInput | LikedAlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumCreateManyUserInputEnvelope
    set?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    disconnect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    delete?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    update?: LikedAlbumUpdateWithWhereUniqueWithoutUserInput | LikedAlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumUpdateManyWithWhereWithoutUserInput | LikedAlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutUserInput | LikedPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutUserInput | LikedPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutUserInput | LikedPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutArtistsInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SongUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistsInput | SongUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistsInput | SongUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistsInput | SongUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistsInput | SongUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistsInput | SongUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistsInput | SongUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ArtistCreateNestedManyWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumCreateNestedOneWithoutSongsInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    connect?: AlbumWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutSongsInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput> | GenreCreateWithoutSongsInput[] | GenreUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput | GenreCreateOrConnectWithoutSongsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlayHistoryCreateNestedManyWithoutSongInput = {
    create?: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput> | PlayHistoryCreateWithoutSongInput[] | PlayHistoryUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutSongInput | PlayHistoryCreateOrConnectWithoutSongInput[]
    createMany?: PlayHistoryCreateManySongInputEnvelope
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
  }

  export type LikedSongCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput> | GenreCreateWithoutSongsInput[] | GenreUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput | GenreCreateOrConnectWithoutSongsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlayHistoryUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput> | PlayHistoryCreateWithoutSongInput[] | PlayHistoryUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutSongInput | PlayHistoryCreateOrConnectWithoutSongInput[]
    createMany?: PlayHistoryCreateManySongInputEnvelope
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArtistUpdateManyWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongsInput | ArtistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongsInput | ArtistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongsInput | ArtistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    upsert?: AlbumUpsertWithoutSongsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutSongsInput, AlbumUpdateWithoutSongsInput>, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type GenreUpdateManyWithoutSongsNestedInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput> | GenreCreateWithoutSongsInput[] | GenreUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput | GenreCreateOrConnectWithoutSongsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutSongsInput | GenreUpsertWithWhereUniqueWithoutSongsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutSongsInput | GenreUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutSongsInput | GenreUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlayHistoryUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput> | PlayHistoryCreateWithoutSongInput[] | PlayHistoryUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutSongInput | PlayHistoryCreateOrConnectWithoutSongInput[]
    upsert?: PlayHistoryUpsertWithWhereUniqueWithoutSongInput | PlayHistoryUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlayHistoryCreateManySongInputEnvelope
    set?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    disconnect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    delete?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    update?: PlayHistoryUpdateWithWhereUniqueWithoutSongInput | PlayHistoryUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlayHistoryUpdateManyWithWhereWithoutSongInput | PlayHistoryUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
  }

  export type LikedSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongsInput | ArtistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongsInput | ArtistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongsInput | ArtistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput> | GenreCreateWithoutSongsInput[] | GenreUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput | GenreCreateOrConnectWithoutSongsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutSongsInput | GenreUpsertWithWhereUniqueWithoutSongsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutSongsInput | GenreUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutSongsInput | GenreUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlayHistoryUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput> | PlayHistoryCreateWithoutSongInput[] | PlayHistoryUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlayHistoryCreateOrConnectWithoutSongInput | PlayHistoryCreateOrConnectWithoutSongInput[]
    upsert?: PlayHistoryUpsertWithWhereUniqueWithoutSongInput | PlayHistoryUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlayHistoryCreateManySongInputEnvelope
    set?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    disconnect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    delete?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    connect?: PlayHistoryWhereUniqueInput | PlayHistoryWhereUniqueInput[]
    update?: PlayHistoryUpdateWithWhereUniqueWithoutSongInput | PlayHistoryUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlayHistoryUpdateManyWithWhereWithoutSongInput | PlayHistoryUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
  }

  export type LikedAlbumCreateNestedManyWithoutAlbumInput = {
    create?: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput> | LikedAlbumCreateWithoutAlbumInput[] | LikedAlbumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutAlbumInput | LikedAlbumCreateOrConnectWithoutAlbumInput[]
    createMany?: LikedAlbumCreateManyAlbumInputEnvelope
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedAlbumUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput> | LikedAlbumCreateWithoutAlbumInput[] | LikedAlbumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutAlbumInput | LikedAlbumCreateOrConnectWithoutAlbumInput[]
    createMany?: LikedAlbumCreateManyAlbumInputEnvelope
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
  }

  export type EnumAlbumTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlbumType
  }

  export type SongUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateOneWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistUpsertWithoutAlbumsInput
    disconnect?: ArtistWhereInput | boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumsInput, ArtistUpdateWithoutAlbumsInput>, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type LikedAlbumUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput> | LikedAlbumCreateWithoutAlbumInput[] | LikedAlbumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutAlbumInput | LikedAlbumCreateOrConnectWithoutAlbumInput[]
    upsert?: LikedAlbumUpsertWithWhereUniqueWithoutAlbumInput | LikedAlbumUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: LikedAlbumCreateManyAlbumInputEnvelope
    set?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    disconnect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    delete?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    update?: LikedAlbumUpdateWithWhereUniqueWithoutAlbumInput | LikedAlbumUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: LikedAlbumUpdateManyWithWhereWithoutAlbumInput | LikedAlbumUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedAlbumUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput> | LikedAlbumCreateWithoutAlbumInput[] | LikedAlbumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumCreateOrConnectWithoutAlbumInput | LikedAlbumCreateOrConnectWithoutAlbumInput[]
    upsert?: LikedAlbumUpsertWithWhereUniqueWithoutAlbumInput | LikedAlbumUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: LikedAlbumCreateManyAlbumInputEnvelope
    set?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    disconnect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    delete?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    connect?: LikedAlbumWhereUniqueInput | LikedAlbumWhereUniqueInput[]
    update?: LikedAlbumUpdateWithWhereUniqueWithoutAlbumInput | LikedAlbumUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: LikedAlbumUpdateManyWithWhereWithoutAlbumInput | LikedAlbumUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type LikedPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput> | LikedPlaylistCreateWithoutPlaylistInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistInput | LikedPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: LikedPlaylistCreateManyPlaylistInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput> | LikedPlaylistCreateWithoutPlaylistInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistInput | LikedPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: LikedPlaylistCreateManyPlaylistInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type EnumPlaylistTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlaylistType
  }

  export type SongUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type LikedPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput> | LikedPlaylistCreateWithoutPlaylistInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistInput | LikedPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: LikedPlaylistCreateManyPlaylistInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutPlaylistInput | LikedPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput> | LikedPlaylistCreateWithoutPlaylistInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistInput | LikedPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: LikedPlaylistCreateManyPlaylistInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutPlaylistInput | LikedPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutGenresInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenresInput | SongUpsertWithWhereUniqueWithoutGenresInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenresInput | SongUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenresInput | SongUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenresInput | SongUpsertWithWhereUniqueWithoutGenresInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenresInput | SongUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenresInput | SongUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedOneWithoutPlayHistoryInput = {
    create?: XOR<SongCreateWithoutPlayHistoryInput, SongUncheckedCreateWithoutPlayHistoryInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlayHistoryInput
    connect?: SongWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayHistoryInput = {
    create?: XOR<UserCreateWithoutPlayHistoryInput, UserUncheckedCreateWithoutPlayHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutPlayHistoryNestedInput = {
    create?: XOR<SongCreateWithoutPlayHistoryInput, SongUncheckedCreateWithoutPlayHistoryInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlayHistoryInput
    upsert?: SongUpsertWithoutPlayHistoryInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutPlayHistoryInput, SongUpdateWithoutPlayHistoryInput>, SongUncheckedUpdateWithoutPlayHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutPlayHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPlayHistoryInput, UserUncheckedCreateWithoutPlayHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayHistoryInput
    upsert?: UserUpsertWithoutPlayHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayHistoryInput, UserUpdateWithoutPlayHistoryInput>, UserUncheckedUpdateWithoutPlayHistoryInput>
  }

  export type SongCreateNestedOneWithoutLikedByInput = {
    create?: XOR<SongCreateWithoutLikedByInput, SongUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedByInput
    connect?: SongWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedSongsInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<SongCreateWithoutLikedByInput, SongUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedByInput
    upsert?: SongUpsertWithoutLikedByInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutLikedByInput, SongUpdateWithoutLikedByInput>, SongUncheckedUpdateWithoutLikedByInput>
  }

  export type UserUpdateOneRequiredWithoutLikedSongsNestedInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    upsert?: UserUpsertWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedSongsInput, UserUpdateWithoutLikedSongsInput>, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type AlbumCreateNestedOneWithoutLikedByInput = {
    create?: XOR<AlbumCreateWithoutLikedByInput, AlbumUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutLikedByInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<AlbumCreateWithoutLikedByInput, AlbumUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutLikedByInput
    upsert?: AlbumUpsertWithoutLikedByInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutLikedByInput, AlbumUpdateWithoutLikedByInput>, AlbumUncheckedUpdateWithoutLikedByInput>
  }

  export type UserUpdateOneRequiredWithoutLikedAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    upsert?: UserUpsertWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedAlbumsInput, UserUpdateWithoutLikedAlbumsInput>, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type PlaylistCreateNestedOneWithoutLikedByInput = {
    create?: XOR<PlaylistCreateWithoutLikedByInput, PlaylistUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutLikedByInput
    connect?: PlaylistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedPlaylistsInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<PlaylistCreateWithoutLikedByInput, PlaylistUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutLikedByInput
    upsert?: PlaylistUpsertWithoutLikedByInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutLikedByInput, PlaylistUpdateWithoutLikedByInput>, PlaylistUncheckedUpdateWithoutLikedByInput>
  }

  export type UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistsInput
    upsert?: UserUpsertWithoutLikedPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedPlaylistsInput, UserUpdateWithoutLikedPlaylistsInput>, UserUncheckedUpdateWithoutLikedPlaylistsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAlbumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlbumType | EnumAlbumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlbumTypeFilter<$PrismaModel> | $Enums.AlbumType
  }

  export type NestedEnumAlbumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlbumType | EnumAlbumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlbumType[] | ListEnumAlbumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlbumTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlbumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlbumTypeFilter<$PrismaModel>
    _max?: NestedEnumAlbumTypeFilter<$PrismaModel>
  }

  export type NestedEnumPlaylistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeFilter<$PrismaModel> | $Enums.PlaylistType
  }

  export type NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistTypeFilter<$PrismaModel>
    _max?: NestedEnumPlaylistTypeFilter<$PrismaModel>
  }

  export type ArtistCreateWithoutFollowersInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    likedBy?: LikedPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
    likedBy?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayHistoryCreateWithoutUserInput = {
    id?: string
    playedAt?: Date | string
    song: SongCreateNestedOneWithoutPlayHistoryInput
  }

  export type PlayHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    playedAt?: Date | string
  }

  export type PlayHistoryCreateOrConnectWithoutUserInput = {
    where: PlayHistoryWhereUniqueInput
    create: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput>
  }

  export type PlayHistoryCreateManyUserInputEnvelope = {
    data: PlayHistoryCreateManyUserInput | PlayHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedSongCreateWithoutUserInput = {
    id?: string
    likedAt?: Date | string
    song: SongCreateNestedOneWithoutLikedByInput
  }

  export type LikedSongUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    likedAt?: Date | string
  }

  export type LikedSongCreateOrConnectWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongCreateManyUserInputEnvelope = {
    data: LikedSongCreateManyUserInput | LikedSongCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedAlbumCreateWithoutUserInput = {
    id?: string
    likedAt?: Date | string
    album: AlbumCreateNestedOneWithoutLikedByInput
  }

  export type LikedAlbumUncheckedCreateWithoutUserInput = {
    id?: string
    albumId: string
    likedAt?: Date | string
  }

  export type LikedAlbumCreateOrConnectWithoutUserInput = {
    where: LikedAlbumWhereUniqueInput
    create: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumCreateManyUserInputEnvelope = {
    data: LikedAlbumCreateManyUserInput | LikedAlbumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedPlaylistCreateWithoutUserInput = {
    id?: string
    likedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutLikedByInput
  }

  export type LikedPlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    playlistId: string
    likedAt?: Date | string
  }

  export type LikedPlaylistCreateOrConnectWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    create: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput>
  }

  export type LikedPlaylistCreateManyUserInputEnvelope = {
    data: LikedPlaylistCreateManyUserInput | LikedPlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithWhereUniqueWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistUpdateManyWithWhereWithoutFollowersInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutFollowersInput>
  }

  export type ArtistScalarWhereInput = {
    AND?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    OR?: ArtistScalarWhereInput[]
    NOT?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    slug?: StringFilter<"Artist"> | string
    bio?: StringNullableFilter<"Artist"> | string | null
    coverImage?: StringNullableFilter<"Artist"> | string | null
    monthlyListeners?: IntFilter<"Artist"> | number
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    slug?: StringFilter<"Playlist"> | string
    duration?: IntFilter<"Playlist"> | number
    releaseDate?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverImage?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type PlayHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayHistoryWhereUniqueInput
    update: XOR<PlayHistoryUpdateWithoutUserInput, PlayHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PlayHistoryCreateWithoutUserInput, PlayHistoryUncheckedCreateWithoutUserInput>
  }

  export type PlayHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayHistoryWhereUniqueInput
    data: XOR<PlayHistoryUpdateWithoutUserInput, PlayHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PlayHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PlayHistoryScalarWhereInput
    data: XOR<PlayHistoryUpdateManyMutationInput, PlayHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayHistoryScalarWhereInput = {
    AND?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
    OR?: PlayHistoryScalarWhereInput[]
    NOT?: PlayHistoryScalarWhereInput | PlayHistoryScalarWhereInput[]
    id?: StringFilter<"PlayHistory"> | string
    songId?: StringFilter<"PlayHistory"> | string
    userId?: StringFilter<"PlayHistory"> | string
    playedAt?: DateTimeFilter<"PlayHistory"> | Date | string
  }

  export type LikedSongUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutUserInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedSongScalarWhereInput = {
    AND?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    OR?: LikedSongScalarWhereInput[]
    NOT?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    id?: StringFilter<"LikedSong"> | string
    songId?: StringFilter<"LikedSong"> | string
    userId?: StringFilter<"LikedSong"> | string
    likedAt?: DateTimeFilter<"LikedSong"> | Date | string
  }

  export type LikedAlbumUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumWhereUniqueInput
    update: XOR<LikedAlbumUpdateWithoutUserInput, LikedAlbumUncheckedUpdateWithoutUserInput>
    create: XOR<LikedAlbumCreateWithoutUserInput, LikedAlbumUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumWhereUniqueInput
    data: XOR<LikedAlbumUpdateWithoutUserInput, LikedAlbumUncheckedUpdateWithoutUserInput>
  }

  export type LikedAlbumUpdateManyWithWhereWithoutUserInput = {
    where: LikedAlbumScalarWhereInput
    data: XOR<LikedAlbumUpdateManyMutationInput, LikedAlbumUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedAlbumScalarWhereInput = {
    AND?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
    OR?: LikedAlbumScalarWhereInput[]
    NOT?: LikedAlbumScalarWhereInput | LikedAlbumScalarWhereInput[]
    id?: StringFilter<"LikedAlbum"> | string
    albumId?: StringFilter<"LikedAlbum"> | string
    userId?: StringFilter<"LikedAlbum"> | string
    likedAt?: DateTimeFilter<"LikedAlbum"> | Date | string
  }

  export type LikedPlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    update: XOR<LikedPlaylistUpdateWithoutUserInput, LikedPlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput>
  }

  export type LikedPlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    data: XOR<LikedPlaylistUpdateWithoutUserInput, LikedPlaylistUncheckedUpdateWithoutUserInput>
  }

  export type LikedPlaylistUpdateManyWithWhereWithoutUserInput = {
    where: LikedPlaylistScalarWhereInput
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedPlaylistScalarWhereInput = {
    AND?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
    OR?: LikedPlaylistScalarWhereInput[]
    NOT?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
    id?: StringFilter<"LikedPlaylist"> | string
    playlistId?: StringFilter<"LikedPlaylist"> | string
    userId?: StringFilter<"LikedPlaylist"> | string
    likedAt?: DateTimeFilter<"LikedPlaylist"> | Date | string
  }

  export type SongCreateWithoutArtistsInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutArtistsInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutArtistsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput>
  }

  export type AlbumCreateWithoutArtistInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    likedBy?: LikedAlbumCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
    likedBy?: LikedAlbumUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type SongUpsertWithWhereUniqueWithoutArtistsInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutArtistsInput, SongUncheckedUpdateWithoutArtistsInput>
    create: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput>
  }

  export type SongUpdateWithWhereUniqueWithoutArtistsInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutArtistsInput, SongUncheckedUpdateWithoutArtistsInput>
  }

  export type SongUpdateManyWithWhereWithoutArtistsInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutArtistsInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    slug?: StringFilter<"Song"> | string
    lyrics?: StringNullableFilter<"Song"> | string | null
    duration?: IntFilter<"Song"> | number
    releaseDate?: DateTimeNullableFilter<"Song"> | Date | string | null
    playCount?: IntFilter<"Song"> | number
    isExplicit?: BoolFilter<"Song"> | boolean
    audioUrl?: StringFilter<"Song"> | string
    coverImage?: StringNullableFilter<"Song"> | string | null
    albumId?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    slug?: StringFilter<"Album"> | string
    type?: EnumAlbumTypeFilter<"Album"> | $Enums.AlbumType
    duration?: IntFilter<"Album"> | number
    releaseDate?: DateTimeNullableFilter<"Album"> | Date | string | null
    playCount?: IntFilter<"Album"> | number
    coverImage?: StringNullableFilter<"Album"> | string | null
    isExplicit?: BoolFilter<"Album"> | boolean
    artistId?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ArtistCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumCreateNestedManyWithoutArtistInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type ArtistUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type ArtistCreateOrConnectWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type AlbumCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    likedBy?: LikedAlbumCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    artistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likedBy?: LikedAlbumUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutSongsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
  }

  export type GenreCreateWithoutSongsInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    songCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    songCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutSongsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
  }

  export type PlaylistCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPlaylistsInput
    likedBy?: LikedPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likedBy?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type PlayHistoryCreateWithoutSongInput = {
    id?: string
    playedAt?: Date | string
    user: UserCreateNestedOneWithoutPlayHistoryInput
  }

  export type PlayHistoryUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    playedAt?: Date | string
  }

  export type PlayHistoryCreateOrConnectWithoutSongInput = {
    where: PlayHistoryWhereUniqueInput
    create: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput>
  }

  export type PlayHistoryCreateManySongInputEnvelope = {
    data: PlayHistoryCreateManySongInput | PlayHistoryCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type LikedSongCreateWithoutSongInput = {
    id?: string
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedSongCreateOrConnectWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongCreateManySongInputEnvelope = {
    data: LikedSongCreateManySongInput | LikedSongCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithWhereUniqueWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type ArtistUpdateManyWithWhereWithoutSongsInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutSongsInput>
  }

  export type AlbumUpsertWithoutSongsInput = {
    update: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSongsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type AlbumUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    likedBy?: LikedAlbumUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikedAlbumUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type GenreUpsertWithWhereUniqueWithoutSongsInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutSongsInput, GenreUncheckedUpdateWithoutSongsInput>
    create: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutSongsInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutSongsInput, GenreUncheckedUpdateWithoutSongsInput>
  }

  export type GenreUpdateManyWithWhereWithoutSongsInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutSongsInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    description?: StringNullableFilter<"Genre"> | string | null
    slug?: StringFilter<"Genre"> | string
    songCount?: IntFilter<"Genre"> | number
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutSongsInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutSongsInput>
  }

  export type PlayHistoryUpsertWithWhereUniqueWithoutSongInput = {
    where: PlayHistoryWhereUniqueInput
    update: XOR<PlayHistoryUpdateWithoutSongInput, PlayHistoryUncheckedUpdateWithoutSongInput>
    create: XOR<PlayHistoryCreateWithoutSongInput, PlayHistoryUncheckedCreateWithoutSongInput>
  }

  export type PlayHistoryUpdateWithWhereUniqueWithoutSongInput = {
    where: PlayHistoryWhereUniqueInput
    data: XOR<PlayHistoryUpdateWithoutSongInput, PlayHistoryUncheckedUpdateWithoutSongInput>
  }

  export type PlayHistoryUpdateManyWithWhereWithoutSongInput = {
    where: PlayHistoryScalarWhereInput
    data: XOR<PlayHistoryUpdateManyMutationInput, PlayHistoryUncheckedUpdateManyWithoutSongInput>
  }

  export type LikedSongUpsertWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutSongInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutSongInput>
  }

  export type SongCreateWithoutAlbumInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutAlbumInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutAlbumInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongCreateManyAlbumInputEnvelope = {
    data: SongCreateManyAlbumInput | SongCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistCreateWithoutAlbumsInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    slug: string
    bio?: string | null
    coverImage?: string | null
    monthlyListeners?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type LikedAlbumCreateWithoutAlbumInput = {
    id?: string
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumUncheckedCreateWithoutAlbumInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedAlbumCreateOrConnectWithoutAlbumInput = {
    where: LikedAlbumWhereUniqueInput
    create: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput>
  }

  export type LikedAlbumCreateManyAlbumInputEnvelope = {
    data: LikedAlbumCreateManyAlbumInput | LikedAlbumCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type SongUpsertWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpdateWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
  }

  export type SongUpdateManyWithWhereWithoutAlbumInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ArtistUpsertWithoutAlbumsInput = {
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type LikedAlbumUpsertWithWhereUniqueWithoutAlbumInput = {
    where: LikedAlbumWhereUniqueInput
    update: XOR<LikedAlbumUpdateWithoutAlbumInput, LikedAlbumUncheckedUpdateWithoutAlbumInput>
    create: XOR<LikedAlbumCreateWithoutAlbumInput, LikedAlbumUncheckedCreateWithoutAlbumInput>
  }

  export type LikedAlbumUpdateWithWhereUniqueWithoutAlbumInput = {
    where: LikedAlbumWhereUniqueInput
    data: XOR<LikedAlbumUpdateWithoutAlbumInput, LikedAlbumUncheckedUpdateWithoutAlbumInput>
  }

  export type LikedAlbumUpdateManyWithWhereWithoutAlbumInput = {
    where: LikedAlbumScalarWhereInput
    data: XOR<LikedAlbumUpdateManyMutationInput, LikedAlbumUncheckedUpdateManyWithoutAlbumInput>
  }

  export type SongCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album: AlbumCreateNestedOneWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type LikedPlaylistCreateWithoutPlaylistInput = {
    id?: string
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedPlaylistsInput
  }

  export type LikedPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type LikedPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: LikedPlaylistWhereUniqueInput
    create: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type LikedPlaylistCreateManyPlaylistInputEnvelope = {
    data: LikedPlaylistCreateManyPlaylistInput | LikedPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistsInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: LikedPlaylistWhereUniqueInput
    update: XOR<LikedPlaylistUpdateWithoutPlaylistInput, LikedPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<LikedPlaylistCreateWithoutPlaylistInput, LikedPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: LikedPlaylistWhereUniqueInput
    data: XOR<LikedPlaylistUpdateWithoutPlaylistInput, LikedPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type LikedPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: LikedPlaylistScalarWhereInput
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type SongCreateWithoutGenresInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album: AlbumCreateNestedOneWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutGenresInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutGenresInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput>
  }

  export type SongUpsertWithWhereUniqueWithoutGenresInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutGenresInput, SongUncheckedUpdateWithoutGenresInput>
    create: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput>
  }

  export type SongUpdateWithWhereUniqueWithoutGenresInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutGenresInput, SongUncheckedUpdateWithoutGenresInput>
  }

  export type SongUpdateManyWithWhereWithoutGenresInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutGenresInput>
  }

  export type SongCreateWithoutPlayHistoryInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album: AlbumCreateNestedOneWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    likedBy?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlayHistoryInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    likedBy?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlayHistoryInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlayHistoryInput, SongUncheckedCreateWithoutPlayHistoryInput>
  }

  export type UserCreateWithoutPlayHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayHistoryInput, UserUncheckedCreateWithoutPlayHistoryInput>
  }

  export type SongUpsertWithoutPlayHistoryInput = {
    update: XOR<SongUpdateWithoutPlayHistoryInput, SongUncheckedUpdateWithoutPlayHistoryInput>
    create: XOR<SongCreateWithoutPlayHistoryInput, SongUncheckedCreateWithoutPlayHistoryInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutPlayHistoryInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutPlayHistoryInput, SongUncheckedUpdateWithoutPlayHistoryInput>
  }

  export type SongUpdateWithoutPlayHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlayHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type UserUpsertWithoutPlayHistoryInput = {
    update: XOR<UserUpdateWithoutPlayHistoryInput, UserUncheckedUpdateWithoutPlayHistoryInput>
    create: XOR<UserCreateWithoutPlayHistoryInput, UserUncheckedCreateWithoutPlayHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayHistoryInput, UserUncheckedUpdateWithoutPlayHistoryInput>
  }

  export type UserUpdateWithoutPlayHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongCreateWithoutLikedByInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album: AlbumCreateNestedOneWithoutSongsInput
    genres?: GenreCreateNestedManyWithoutSongsInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    genres?: GenreUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutLikedByInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutLikedByInput, SongUncheckedCreateWithoutLikedByInput>
  }

  export type UserCreateWithoutLikedSongsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedSongsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
  }

  export type SongUpsertWithoutLikedByInput = {
    update: XOR<SongUpdateWithoutLikedByInput, SongUncheckedUpdateWithoutLikedByInput>
    create: XOR<SongCreateWithoutLikedByInput, SongUncheckedCreateWithoutLikedByInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutLikedByInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutLikedByInput, SongUncheckedUpdateWithoutLikedByInput>
  }

  export type SongUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
  }

  export type UserUpsertWithoutLikedSongsInput = {
    update: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type UserUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    artistId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutLikedByInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutLikedByInput, AlbumUncheckedCreateWithoutLikedByInput>
  }

  export type UserCreateWithoutLikedAlbumsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedAlbumsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedPlaylists?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type AlbumUpsertWithoutLikedByInput = {
    update: XOR<AlbumUpdateWithoutLikedByInput, AlbumUncheckedUpdateWithoutLikedByInput>
    create: XOR<AlbumCreateWithoutLikedByInput, AlbumUncheckedCreateWithoutLikedByInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutLikedByInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutLikedByInput, AlbumUncheckedUpdateWithoutLikedByInput>
  }

  export type AlbumUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    artistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserUpsertWithoutLikedAlbumsInput = {
    update: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type UserUpdateWithoutLikedAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    user?: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutLikedByInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutLikedByInput, PlaylistUncheckedCreateWithoutLikedByInput>
  }

  export type UserCreateWithoutLikedPlaylistsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedPlaylistsInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    role?: $Enums.UserRole
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    playHistory?: PlayHistoryUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
  }

  export type PlaylistUpsertWithoutLikedByInput = {
    update: XOR<PlaylistUpdateWithoutLikedByInput, PlaylistUncheckedUpdateWithoutLikedByInput>
    create: XOR<PlaylistCreateWithoutLikedByInput, PlaylistUncheckedCreateWithoutLikedByInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutLikedByInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutLikedByInput, PlaylistUncheckedUpdateWithoutLikedByInput>
  }

  export type PlaylistUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    user?: UserUpdateOneWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type UserUpsertWithoutLikedPlaylistsInput = {
    update: XOR<UserUpdateWithoutLikedPlaylistsInput, UserUncheckedUpdateWithoutLikedPlaylistsInput>
    create: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedPlaylistsInput, UserUncheckedUpdateWithoutLikedPlaylistsInput>
  }

  export type UserUpdateWithoutLikedPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    duration?: number
    releaseDate?: Date | string | null
    type?: $Enums.PlaylistType
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayHistoryCreateManyUserInput = {
    id?: string
    songId: string
    playedAt?: Date | string
  }

  export type LikedSongCreateManyUserInput = {
    id?: string
    songId: string
    likedAt?: Date | string
  }

  export type LikedAlbumCreateManyUserInput = {
    id?: string
    albumId: string
    likedAt?: Date | string
  }

  export type LikedPlaylistCreateManyUserInput = {
    id?: string
    playlistId: string
    likedAt?: Date | string
  }

  export type ArtistUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    likedBy?: LikedPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
    likedBy?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutPlayHistoryNestedInput
  }

  export type PlayHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedAlbumUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedPlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyArtistInput = {
    id?: string
    title: string
    description?: string | null
    slug: string
    type?: $Enums.AlbumType
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    coverImage?: string | null
    isExplicit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    likedBy?: LikedAlbumUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    likedBy?: LikedAlbumUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAlbumTypeFieldUpdateOperationsInput | $Enums.AlbumType
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumUncheckedUpdateManyWithoutUserNestedInput
    likedPlaylists?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryCreateManySongInput = {
    id?: string
    userId: string
    playedAt?: Date | string
  }

  export type LikedSongCreateManySongInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type ArtistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type ArtistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyListeners?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    songCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPlaylistsNestedInput
    likedBy?: LikedPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayHistoryNestedInput
  }

  export type PlayHistoryUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayHistoryUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateManyAlbumInput = {
    id?: string
    title: string
    slug: string
    lyrics?: string | null
    duration: number
    releaseDate?: Date | string | null
    playCount?: number
    isExplicit?: boolean
    audioUrl: string
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumCreateManyAlbumInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type SongUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistCreateManyPlaylistInput = {
    id?: string
    userId: string
    likedAt?: Date | string
  }

  export type SongUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    genres?: GenreUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput
  }

  export type LikedPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneRequiredWithoutSongsNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    playHistory?: PlayHistoryUncheckedUpdateManyWithoutSongNestedInput
    likedBy?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playCount?: IntFieldUpdateOperationsInput | number
    isExplicit?: BoolFieldUpdateOperationsInput | boolean
    audioUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}