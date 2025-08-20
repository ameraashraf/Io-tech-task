import { useQuery } from "@tanstack/react-query";
import { fetchClientSections } from "../services/clientSections";
import { ClientSectionResponse, Testimonial } from "@/app/types/types";

const API_BASE_URL = "http://localhost:1337";

export const useClientSections = (locale: string = "en") => {
	return useQuery({
		queryKey: ["client-sections", locale],
		queryFn: () => fetchClientSections(locale),
		staleTime: 5 * 60 * 1000,
		retry: 2,
	});
};

export const transformClientTestimonials = (
	apiData: ClientSectionResponse | undefined
): { testimonials: Testimonial[]; sectionTitle?: string; sectionDescription?: string } => {
	if (!apiData?.data?.[0]) {
		return { testimonials: [] };
	}

	const section = apiData.data[0];

	const testimonials: Testimonial[] = (section.clientData || []).map((item) => ({
		name: item.name || "",
		title: item.position || "",
		text: item.review || "",
		image: item.clientImage?.url
			? item.clientImage.url.startsWith("http")
				? item.clientImage.url
				: `${API_BASE_URL}${item.clientImage.url}`
			: "/Man.png",
	}));

	return {
		testimonials,
		sectionTitle: section.sectionTitle,
		sectionDescription: section.sectionDescription,
	};
}; 