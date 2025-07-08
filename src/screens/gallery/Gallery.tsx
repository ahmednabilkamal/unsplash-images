import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { getGalleryUrl } from "../../services/AppUrls";
import { useAppContext } from "../../context/AppContext";

interface GalleryItem {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const Gallery = () => {
  const { search } = useAppContext();

  const getGalleryResponse = useQuery<GalleryItem[], AxiosError>({
    queryKey: ["gallery", search],
    queryFn: async () => {
      const galleryResult = await axios.get<GalleryItem[]>(
        `${getGalleryUrl}${search}`
      );
      return galleryResult.data;
    },
  });

  if (getGalleryResponse.isError) {
    return (
      <section className="image-container">
        <h4>Something went wrong: {getGalleryResponse.error.message}</h4>
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
  if (!result || result.length === 0) {
    return (
      <section className="image-container">
        <h4>No data found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => (
        <img
          src={item.urls.regular}
          alt={item.alt_description || "Gallery image"}
          key={item.id}
          className="img"
        />
      ))}
    </section>
  );
};

export { Gallery };
