import { RenuoUploadTranslations } from './generated/i18n-interface';
import { allTranslations } from './generated/i18n-translations';

export class I18n {
  public static t: RenuoUploadTranslations = allTranslations['de'];

  private static lang = 'de';

  public static setLang(lang: string) {
    I18n.lang = lang;
    I18n.t = allTranslations[I18n.lang];
  }

  public static getLang() {
    return I18n.lang;
  }

  public static tFromString(translationKey: string): string {
    return translationKey.split('.')
      .reduce((current: any, part) => current[part], I18n.t);
  }

  public static interpolate(translation: string, params: {[key: string]: string}): string {
    return Object.keys(params).reduce((result, key) => result.split(`{{${key}}}`).join(params[key]), translation);
  }

  public static pluralize(translationParent: {one: string, other: string}, count: number): string {
    return I18n.interpolate(translationParent[count === 1 ? 'one' : 'other'], {count: count.toString()});
  }
}
