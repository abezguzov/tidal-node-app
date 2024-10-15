import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Enhancing Accuracy in Automatic Data Processing",
    paragraph:
      "Explore how automatic data processing systems are revolutionizing data accuracy, reducing human error, and improving overall data quality in various industries.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Data Scientist",
    },
    tags: ["data-processing", "accuracy"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Reducing Manual Errors: The Power of Automation",
    paragraph:
      "Discover how automated data processing techniques are minimizing manual errors, increasing efficiency, and streamlining workflows across organizations.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Automation Specialist",
    },
    tags: ["automation", "error-reduction"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Securing Automated Data Processing: Best Practices",
    paragraph:
      "Learn about the latest security measures and best practices to protect your automated data processing systems from potential threats and vulnerabilities.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Cybersecurity Expert",
    },
    tags: ["security", "data-processing"],
    publishDate: "2023",
  },
];
export default blogData;
