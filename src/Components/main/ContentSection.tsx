import { Filters, Header, ResourceCard, SearchForm } from '../search/index';
import { Links } from '../../constants';
import { Section, Main, Div } from '../semantics/index';

const ContentSection = ({ searchParams }: SearchProps) => (
  <Main className="flex-col w-full mx-auto flex-center paddings max-w-screen-2xl">
    <Section className="w-full nav-padding">
      <Div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="mb-6 text-center text-white sm:heading1 heading2"> </h1>
      </Div>
      <SearchForm />
    </Section>

    <Filters />

    {(searchParams?.query || searchParams?.type) && (
      <Section className="flex-col w-full mt-6 flex-center sm:mt-20">
        <Header query={searchParams?.query || ''} type={searchParams?.type || ''} />

        <Div className="flex flex-wrap justify-center w-full gap-16 mt-12 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </Div>
      </Section>
    )}

    {resourcesPlaylist.map((item: any) => (
      <Section key={item._id} className="flex-col w-full mt-6 flex-center sm:mt-20">
        <h1 className="self-start heading3 text-white-800">{item.title}</h1>
        <Div className="flex flex-wrap justify-center w-full gap-16 mt-12 sm:justify-start">
          {item.resources.map((resource: any) => (
            <ResourceCard
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadLink={resource.downloadLink as string}
            />
          ))}
        </Div>
      </Section>
    ))}
  </Main>
);

export default ContentSection;
