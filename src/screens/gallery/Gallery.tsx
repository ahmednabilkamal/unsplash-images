import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getGalleryUrl } from "../../services/AppUrls";

interface GalleryItem {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const Gallery = () => {
  const getGalleryResponse = useQuery<GalleryItem[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      const galleryResult = await axios.get(getGalleryUrl);
      return galleryResult.data;
    },
  });

  if (getGalleryResponse.isError) {
    return (
      <section className="image-container">
        <h4>Something went wrong</h4>
      </section>
    );
  }

  if (getGalleryResponse.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  const result = getGalleryResponse.data;
  if (result && result?.length < 1) {
    return (
      <section className="image-container">
        <h4>No data found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result?.map((item) => {
        return (
          <img
            src={item.urls.regular}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export { Gallery };
