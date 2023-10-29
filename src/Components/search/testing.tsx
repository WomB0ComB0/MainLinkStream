import Filters from './Filters';
import Header from './Header';
import ResourceCard from './ResourceCard';
import SearchForm from './SearchForm';
import { Links } from '../../constants';
// export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = ({ searchParams }: Props) => (
  <main className="flex-col w-full mx-auto flex-center paddings max-w-screen-2xl">
    <section className="w-full nav-padding">
      <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        <h1 className="mb-6 text-center text-white sm:heading1 heading2">JavaScript Mastery Resources</h1>
      </div>
      <SearchForm />
    </section>

    <Filters />

    {(searchParams?.query || searchParams?.category) && (
      <section className="flex-col w-full mt-6 flex-center sm:mt-20">
        <Header query={searchParams?.query || ''} category={searchParams?.category || ''} />

        <div className="flex flex-wrap justify-center w-full gap-16 mt-12 sm:justify-start">
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
        </div>
      </section>
    )}

    {resourcesPlaylist.map((item: any) => (
      <section key={item._id} className="flex-col w-full mt-6 flex-center sm:mt-20">
        <h1 className="self-start heading3 text-white-800">{item.title}</h1>
        <div className="flex flex-wrap justify-center w-full gap-16 mt-12 sm:justify-start">
          {item.resources.map((resource: any) => (
            <ResourceCard
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.views}
              downloadLink={resource.downloadLink}
            />
          ))}
        </div>
      </section>
    ))}
  </main>
);

export default Page;
