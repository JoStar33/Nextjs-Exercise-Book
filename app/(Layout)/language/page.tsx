'use client';

import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export default function LanguageLanguagePage() {
  const { t } = useTranslation();
  // 결론부터 말하면 안된다.
  // Next.js App Router는 언어변경 방식이 근본적으로 다름.
  const handleChangeLanguage = () => {
    const language = window.location.pathname.split('/').includes('ko')
      ? 'en'
      : 'ko';
    const { pathname, search } = window.location;
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const { origin } = url;

    let newUrl = origin;
    if (language === 'en') newUrl += '/en';
    newUrl += pathname;
    if (search) newUrl += search;

    window.location.href = newUrl;
  };

  return (
    <S.LanguagePage>
      <button type="button" onClick={() => handleChangeLanguage()}>
        언어변경
      </button>
      <p>{t('language.title')}</p>
      <p>{t('language.description')}</p>
    </S.LanguagePage>
  );
}

const S = {
  LanguagePage: styled.div`
    ${flexCenter}
    flex-direction: column;
    button {
      width: 200px;
      height: 50px;
    }
  `,
};
