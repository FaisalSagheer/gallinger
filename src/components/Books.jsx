import { ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';
import src from "@/../public/assets/placeholder.jpg"
export default function Books() {
  const books = [
    {
      title: "A Mid October In Kansas",
      subtitle: "An unexpected vacation",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Mid-October-Kansas-L-Gallinger-ebook/dp/B0D48NXN1Y/ref=sr_1_8?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-8&text=E.L.+Gallinger",
      src: "@/../public/assets/A_Mid_October_In_Kansas.jpg",
    },
    {
      title: "A Place of My Own",
      subtitle: "Building an off-grid cabin",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Place-My-Own-L-Gallinger-ebook/dp/B0D2585572/ref=sr_1_5?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-5&text=E.L.+Gallinger",
      src: "@/../public/assets/A_Place_Of_My_Own.jpg",
    },
    {
      title: "A Year And A Half",
      subtitle: "Recovering from an accident",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/YEAR-HALF-L-Gallinger-ebook/dp/B0D9MQYKSB/ref=sr_1_3?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-3&text=E.L.+Gallinger",
      src: "@/../public/assets/A_Year_And_A_Half.jpg",
    },
    {
      title: "Florida Story Tellers",
      subtitle: "An accumulation of characters",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Florida-Story-Tellers-L-Gallinger-ebook/dp/B0DD5TPY5B/ref=sr_1_9?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-9&text=E.L.+Gallinger",
      src: "@/../public/assets/Florida_Story_Tellers.jpg",
    },
    {
      title: "The Evolution Of A Relationship",
      subtitle: "Discovering Intercourse",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Chapter-14-Connie-L-Gallinger-ebook/dp/B0DTYJ2WHK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-1&text=E.L.+Gallinger",
      src: "@/../public/assets/The_Evolution_Of_A_Relationship.jpg",
    },
    {
      title: "Chapter 14, Connie",
      subtitle: "A two-way erotic encounter",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Chapter-14-Connie-L-Gallinger-ebook/dp/B0DTYJ2WHK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-1&text=E.L.+Gallinger",
      src: "@/../public/assets/Chapter_14_Connie.jpg",
    },
    {
      title: "A Week-End In Virginia",
      subtitle: "A toy story",
      status: "published",
      amazonUrl:
        "https://www.amazon.com/Week-End-Virginia-L-Gallinger-ebook/dp/B0F7FPPNF1/ref=sr_1_6?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-6&text=E.L.+Gallinger",
      src: "@/../public/assets/A_Week-End_In_Virginia.png",
    },
    {
      title: "A Visitor From Indiana",
      subtitle: "Taking a walk on the wild side",
      status: "published",
      src: "@/../public/assets/A_Visitor_From_Indiana.jpg",
      amazonUrl:
        "https://www.amazon.com/Visitor-Indiana-L-Gallinger-ebook/dp/B0FJ2SDGVB/ref=sr_1_4?dib=eyJ2IjoiMSJ9.6Ls77e0fpeG-LzD_4OCzwHE0Y3t65xvC_NjHG505W1nq38-5L3rYo3VrUjkWKK-qILKV3o6gCeTCDbu3s5iCE_kUsJY2zcp4JJcRhYU0_kxZ5DCynXp0AI5E8lTlRSNP.nw1Gr7p8xSE-UWeTssVTYHPFA3zHl8_A-ijq0-kivJ4&dib_tag=se&qid=1761291356&refinements=p_27%3AE.L.+Gallinger&s=digital-text&sr=1-4&text=E.L.+Gallinger",
    },
    {
      title: "Hannah",
      subtitle: "",
      status: "in-process",
      src: "@/../public/assets/placeholder.jpg",
      amazonUrl: "#",
    },
    {
      title: "Life's Been Good To Me",
      subtitle: "",
      status: "nearing-completion",
      src: "@/../public/assets/placeholder.jpg",
      amazonUrl: "#",
    },
    {
      title: "An Off Grid Experience",
      subtitle: "",
      status: "in-process",
      src: "@/../public/assets/placeholder.jpg",
      amazonUrl: "#",
    },
    {
      title: "Price Lake Stories",
      subtitle: "",
      status: "in-process",
      src: "@/../public/assets/placeholder.jpg",
      amazonUrl: "#",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            Published
          </span>
        );
      case 'in-process':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            In Process
          </span>
        );
      case 'nearing-completion':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
            Nearing Completion
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Books</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8" />
          <p className="text-lg text-stone-600">
            A collection of stories ranging from warm summer days to profound life experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 group-hover:bg-amber-100 transition-colors">
                  <Image src={src}  width={200} height={200} className="w-40" alt="/"/>
                </div>
                <div className="flex-1">
                  {getStatusBadge(book.status)}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-stone-900 mb-2 leading-snug">
                {book.title}
              </h3>

              {book.subtitle && (
                <p className="text-stone-600 text-sm mb-4 italic">{book.subtitle}</p>
              )}

              {book.amazonUrl && (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium text-sm transition-colors group/link"
                >
                  View on Amazon
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
