import qs from 'query-string';
import { CodersRankIcon, LinkedInIcon } from '../Components/browser/icons/networking/index';
import { CodePenIcon, DribbleIcon } from '../Components/browser/icons/design/index';
import { GithubIcon, GitLabIcon } from '../Components/browser/icons/development/index';
import {
  LeetCodeIcon,
  HackerRankIcon,
  GeekForGeeksIcon,
  FCCIcon,
  SoloLearnIcon,
  MicrosoftLearnIcon,
} from '../Components/browser/icons/learning/index';
import {
  InstagramIcon,
  TwitterIcon,
  DiscordIcon,
  DevToIcon,
  MediumIcon,
} from '../Components/browser/icons/socials/index';

export const icons = {
  networking: {
    CodersRankIcon,
    LinkedInIcon,
  },
  design: {
    CodePenIcon,
    DribbleIcon,
  },
  development: {
    GithubIcon,
    GitLabIcon,
  },
  learning: {
    LeetCodeIcon,
    HackerRankIcon,
    GeekForGeeksIcon,
    FCCIcon,
    SoloLearnIcon,
    MicrosoftLearnIcon,
  },
  socials: {
    InstagramIcon,
    TwitterIcon,
    DiscordIcon,
    DevToIcon,
    MediumIcon,
  },
};

type UrlQueryParams = {
  params: URLSearchParams;
  key?: string;
  value?: string;
  keysToRemove?: string[];
};

export function formUrlQuery({ params, key, value, keysToRemove }: UrlQueryParams) {
  const currentUrl = qs.parse(params.toString());

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl }, { skipNull: true });
}
