import { SERVICES, CITIES } from "../../../../public/lib/constants";
import { serviceSlug, pageSlug } from "../../../../public/lib/slug";
import ServiceCityContent from "../../components/ServiceCities"; 

export const dynamic = "force-dynamic";

// import { BLOGS } from "../../../../public/lib/content"; // import data

// Pre-generate all combinations at build time (SSG)
// export async function generateStaticParams() {
//   const params = [];
//   for (const s of SERVICES) {
//     for (const c of CITIES) {
//       params.push({
//         service: serviceSlug(s),
//         page: pageSlug(s, c),
//       });
//     }
//   }
//   return params;
// }

// Optional: metadata for SEO for each generated page
// export async function generateMetadata({ params }) {
//   const { service, page } = params;


//   // find matching blog entry
//   // const blog = BLOGS.find(
//   //   (b) =>
//   //     b.service === service.toLowerCase() &&
//   //     b.slug === page
//   // );

//   // if (!blog || !blog.meta) {
//   //   return {
//   //     title: "Digital Paaji",
//   //     description: "Best Digital Marketing Services",
//   //   };
//   // } 

//   const citySlug = page.replace(`${service}-agency-`, "");
//   const cityName = citySlug.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");
//   const serviceName = service.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");

//   return {
//     title: blog.meta.title,
//     description: blog.meta.description,
//     alternates:  { canonical: `https://digitalpaaji.com/${service}/${page}` },
//       openGraph: {
//       title: blog.meta.title,
//       description: blog.meta.description,
//       url: `https://digitalpaaji.com/${service}/${page}`,
//     },
//   };
// }

// Server component: compute readable names and pass to client component
export default async function Page ({ params }) {
  const { service, page } = await params;
  // const city = page.replace(`-`, " ");

// const servicefull= service.replace(`-`, " ");
  // const toTitle = (slug) =>
  //   slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");

  // const serviceName = service.toLowerCase(); // normalize
  // const cityName = citySlug.toLowerCase();   // normalize

  return <ServiceCityContent serviceName={service} cityName={page} />;
}

