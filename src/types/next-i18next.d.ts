// types/next-i18next.d.ts
declare module "next-i18next/dist/commonjs/serverSideTranslations" {
  export function serverSideTranslations(
    locale: string,
    namespacesRequired?: string[]
  ): Promise<Record<string, any>>;
}
