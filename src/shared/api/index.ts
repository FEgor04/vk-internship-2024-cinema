/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Документация для неофициального API кинопоиска (kinopoisk.dev).
 * 
<!-- Yandex.Metrika counter -->
<div><img src="https://mc.yandex.ru/watch/62307766" style="position:absolute; left:-9999px;" alt="" /></div>
<!-- /Yandex.Metrika counter -->
<p>Через этот API вы можете получить практически все данные из кинопоиска. Больше информации вы можете получить изучив эту документацию.</p>
<h2>Как работать с документацией?</h2>
<p>
Для начала работы с API вам необходимо получить токен, который вы можете получить в боте <a href="https://t.me/kinopoiskdev_bot">@kinopoiskdev_bot</a>. <br />
После получения токена, вам необходимо авторизоваться в документации, для этого нажмите на кнопку <strong>Authorize</strong> и введите токен в поле <strong>Value</strong>.<br />
После авторизации вы можете отправлять запросы к API, для этого нажмите на кнопку <strong>Try it out</strong> и заполните необходимые поля для составления нужного фильтра.<br />
После заполнения полей нажмите на кнопку <strong>Execute</strong> и получите ответ от API и пример запроса.
</p>
<h3>Как работать с API?</h3>
<p>
API работает по принципу REST, все запросы отправляются на адрес <code>https://api.kinopoisk.dev/</code> с указанием версии API и необходимого ресурса.<br />
Все запросы к API кинопоиска должны содержать заголовок <code>X-API-KEY</code> с вашим токеном. В противном случае вы получите ошибку <code>401</code>.<br />
При составлении запроса учитывайте, что все параметры должны быть в <code>query</code> и <code>path</code>. В зависимости от метода который вы используете.
Например, вы хотите получить список фильмов за 2023 год в жанре <code>криминал</code>, тогда ваш запрос будет выглядеть так: <code>https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал</code>.
Или вы хотите получить список фильмов с рейтингом выше 8, тогда ваш запрос будет выглядеть так: <code>https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10</code>.
Документация kinopoisk api может помочь вам составить нужный запрос, для этого воспользуйтесь ее конструктором.
</p>
<h3>Особенности синтекса query параметров</h3>
<p>
Ключи в query параметрах имеют разные типы значений. В зависимости от типа значения, вы можете использовать разные операторы для фильтрации для поиска максимально релевантного фильма, сериала и т.д. в базе. <br />
Поля с типом <code>Number</code> могут принимать значения в форматах: <code>rating.kp=1-10</code>, <code>rating.kp=1</code>, <code>year=2022&year=2023</code>. <br />
Поля с типом <code>Date</code> могут принимать значения в форматах: <code>premiere.russia=dd.mm.yyyy-dd.mm.yyyy</code>, <code>premiere.russia=dd.mm.yyyy</code>. <br />
Поля с типом <code>String</code> могут принимать значения в форматах: <code>genres.name=драма</code>, <code>genres.name=криминал</code>, <code>genres.name=криминал&genres.name=драма</code> <br/>
Поля с типом <code>Boolean</code> могут принимать значения в форматах: <code>isSeries=true</code>, <code>isSeries=false</code>. <br />
Параметры жанров и стран могут принимать операторы <code>+</code> и <code>!</code>, для указания включаемых и исключаемых значений. Например, вы хотите получить список фильмов в жанрах <code>драма</code> и <code>криминал</code>, тогда ваш запрос будет выглядеть так: <code>genres.name=+драма&genres.name=+криминал</code>. Или вы хотите получить список фильмов с жанром <code>драма</code> и без жанра <code>криминал</code>, тогда ваш запрос будет выглядеть так: <code>genres.name=+драма&genres.name=!криминал</code>. <br />
</p>
<p>
Расшифровка операторов:
<ul>
  <li><code>!</code> - исключить. Этот символ нужно отправлять в кодированной форме <code>%21</code></li>
  <li><code>+</code> - включить. Этот символ нужно отправлять в кодированной форме <code>%2B</code></li>
  <li><code>-</code> - диапазон значений, используется в качестве разделителя.</li>
</ul>
</p>

<p>По вопросам работы с API обращайтесь в чат <a href="https://t.me/+jeHPZVXiLPFhODJi">Developer Community KinopoiskDev</a>.</p>

<p>Если вы обнаружили ошибку или у вас есть предложения по улучшению, создавайте issue на <a href="https://github.com/mdwitr0/kinopoiskdev">GitHub</a>.</p>

<h3>Полезные ссылки:</h3>
<ul>
  <li><a href="https://kinopoiskdev.readme.io">Более удобная документация</a></li>
  <li><a href="https://github.com/OpenMovieDB/kinopoiskdev_client">JavaScript и TypeScript клиент (Устарел, ждет обновления)</a></li>
  <li><a href="https://github.com/odi1n/kinopoisk_dev">Python клиент (Устарел, ждет обновления)</a></li>
  <li><a href="/documentation-json">OpenAPI Specification (JSON)</a></li>
  <li><a href="/documentation-yaml">OpenAPI Specification (YAML)</a></li>
</ul>

 * OpenAPI spec version: 1.4
 */
import type {
  ImageControllerFindManyV14Params,
  ImageDocsResponseDtoV14,
  KeywordControllerFindManyV14Params,
  KeywordDocsResponseDtoV14,
  List,
  ListControllerFindManyV14Params,
  ListDocsResponseDtoV14,
  MovieAwardDocsResponseDto,
  MovieControllerFindManyAwardsV14Params,
  MovieControllerFindManyByQueryV14Params,
  MovieControllerGetPossibleValuesByFieldNameParams,
  MovieControllerGetRandomMovieV14Params,
  MovieControllerSearchMovieV14Params,
  MovieDocsResponseDtoV14,
  MovieDtoV14,
  Person,
  PersonAwardDocsResponseDto,
  PersonControllerFindManyAwardsV14Params,
  PersonControllerFindManyV14Params,
  PersonControllerSearchPersonV14Params,
  PersonDocsResponseDtoV14,
  PossibleValueDto,
  ReviewControllerFindManyV14Params,
  ReviewDocsResponseDtoV14,
  SearchMovieResponseDtoV14,
  SearchPersonResponseDtoV14,
  SeasonControllerFindManyV14Params,
  SeasonDocsResponseDtoV14,
  StudioControllerFindManyV14Params,
  StudioDocsResponseDtoV14,
} from "./index.schemas";
import { customInstance } from "./instance";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Возвращает всю доступную информацию о сущности.
 * @summary Поиск по id
 */
export const movieControllerFindOneV14 = (
  id?: number | null,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<MovieDtoV14>(
    { url: `/v1.4/movie/${id}`, method: "GET" },
    options,
  );
};

/**
 * Этот метод вернет список фильмов удовлетворяющих вашему запросу. <br> В ответе придут поля указанные в параметре `selectFields`. Если его не указать, то вернутся только дефолтные поля.
 * @summary Универсальный поиск с фильтрами
 */
export const movieControllerFindManyByQueryV14 = (
  params?: MovieControllerFindManyByQueryV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<MovieDocsResponseDtoV14>(
    { url: `/v1.4/movie`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод вернет список фильмов которые подходят под ваш запрос.
 * @summary Поиск фильмов по названию
 */
export const movieControllerSearchMovieV14 = (
  params: MovieControllerSearchMovieV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<SearchMovieResponseDtoV14>(
    { url: `/v1.4/movie/search`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод вернет рандомный тайтл из базы. Вы можете составить фильтр, чтобы получить рандомный тайтл по вашим критериям.
 * @summary Получить рандомный тайтл из базы
 */
export const movieControllerGetRandomMovieV14 = (
  params?: MovieControllerGetRandomMovieV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<MovieDtoV14>(
    { url: `/v1.4/movie/random`, method: "GET", params },
    options,
  );
};

/**
 * @summary Награды тайтлов
 */
export const movieControllerFindManyAwardsV14 = (
  params?: MovieControllerFindManyAwardsV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<MovieAwardDocsResponseDto>(
    { url: `/v1.4/movie/awards`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод принимает только определенные поля, и возвращает по ним все доступные значения.
 * @summary Получить список стран, жанров, и т.д.
 */
export const movieControllerGetPossibleValuesByFieldName = (
  params?: MovieControllerGetPossibleValuesByFieldNameParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PossibleValueDto[]>(
    { url: `/v1/movie/possible-values-by-field`, method: "GET", params },
    options,
  );
};

/**
 * @summary Поиск сезонов
 */
export const seasonControllerFindManyV14 = (
  params?: SeasonControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<SeasonDocsResponseDtoV14>(
    { url: `/v1.4/season`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска персон по фильтрам. Он принимает множество параметров, которые можно комбинировать между собой. Если вам нужен только поиск по имени, используйте метод `Полнотекстовый поиск` (search). В этом методе также доступен выбор полей. А в ответ приходит полная модель персоны.
 * @summary Универсальный поиск с фильтрами
 */
export const reviewControllerFindManyV14 = (
  params?: ReviewControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ReviewDocsResponseDtoV14>(
    { url: `/v1.4/review`, method: "GET", params },
    options,
  );
};

/**
 * Возвращает всю доступную информацию о сущности.
 * @summary Поиск по id
 */
export const personControllerFindOneV14 = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<Person>(
    { url: `/v1.4/person/${id}`, method: "GET" },
    options,
  );
};

/**
 * Этот метод вернет список персон удовлетворяющих вашему запросу. <br> В ответе придут поля указанные в параметре `selectFields`. Если его не указать, то вернутся только дефолтные поля.
 * @summary Универсальный поиск с фильтрами
 */
export const personControllerFindManyV14 = (
  params?: PersonControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PersonDocsResponseDtoV14>(
    { url: `/v1.4/person`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод вернет список персон которые подходят под ваш запрос.
 * @summary Поиск актеров, режиссеров, и т.д по имени
 */
export const personControllerSearchPersonV14 = (
  params: PersonControllerSearchPersonV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<SearchPersonResponseDtoV14>(
    { url: `/v1.4/person/search`, method: "GET", params },
    options,
  );
};

/**
 * @summary Награды актеров
 */
export const personControllerFindManyAwardsV14 = (
  params?: PersonControllerFindManyAwardsV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PersonAwardDocsResponseDto>(
    { url: `/v1.4/person/awards`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска студий
 * @summary Поиск студий
 */
export const studioControllerFindManyV14 = (
  params?: StudioControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<StudioDocsResponseDtoV14>(
    { url: `/v1.4/studio`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска ключевых слов
 * @summary Поиск ключевых слов
 */
export const keywordControllerFindManyV14 = (
  params?: KeywordControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<KeywordDocsResponseDtoV14>(
    { url: `/v1.4/keyword`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска картинок которые привязаны к фильмам и сериалам
 * @summary Поиск картинок
 */
export const imageControllerFindManyV14 = (
  params?: ImageControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ImageDocsResponseDtoV14>(
    { url: `/v1.4/image`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска коллекций кино
 * @summary Поиск коллекций
 */
export const listControllerFindManyV14 = (
  params?: ListControllerFindManyV14Params,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ListDocsResponseDtoV14>(
    { url: `/v1.4/list`, method: "GET", params },
    options,
  );
};

/**
 * Этот метод предназначен для поиска коллекции кино по slug
 * @summary Поиск коллекции по slug
 */
export const listControllerFindOneV14 = (
  slug: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<List>(
    { url: `/v1.4/list/${slug}`, method: "GET" },
    options,
  );
};

export type MovieControllerFindOneV14Result = NonNullable<
  Awaited<ReturnType<typeof movieControllerFindOneV14>>
>;
export type MovieControllerFindManyByQueryV14Result = NonNullable<
  Awaited<ReturnType<typeof movieControllerFindManyByQueryV14>>
>;
export type MovieControllerSearchMovieV14Result = NonNullable<
  Awaited<ReturnType<typeof movieControllerSearchMovieV14>>
>;
export type MovieControllerGetRandomMovieV14Result = NonNullable<
  Awaited<ReturnType<typeof movieControllerGetRandomMovieV14>>
>;
export type MovieControllerFindManyAwardsV14Result = NonNullable<
  Awaited<ReturnType<typeof movieControllerFindManyAwardsV14>>
>;
export type MovieControllerGetPossibleValuesByFieldNameResult = NonNullable<
  Awaited<ReturnType<typeof movieControllerGetPossibleValuesByFieldName>>
>;
export type SeasonControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof seasonControllerFindManyV14>>
>;
export type ReviewControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof reviewControllerFindManyV14>>
>;
export type PersonControllerFindOneV14Result = NonNullable<
  Awaited<ReturnType<typeof personControllerFindOneV14>>
>;
export type PersonControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof personControllerFindManyV14>>
>;
export type PersonControllerSearchPersonV14Result = NonNullable<
  Awaited<ReturnType<typeof personControllerSearchPersonV14>>
>;
export type PersonControllerFindManyAwardsV14Result = NonNullable<
  Awaited<ReturnType<typeof personControllerFindManyAwardsV14>>
>;
export type StudioControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof studioControllerFindManyV14>>
>;
export type KeywordControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof keywordControllerFindManyV14>>
>;
export type ImageControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof imageControllerFindManyV14>>
>;
export type ListControllerFindManyV14Result = NonNullable<
  Awaited<ReturnType<typeof listControllerFindManyV14>>
>;
export type ListControllerFindOneV14Result = NonNullable<
  Awaited<ReturnType<typeof listControllerFindOneV14>>
>;
