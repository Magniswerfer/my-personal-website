interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, summary, date, slug }: BlogCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <a href={`/blog/${slug}`} class="block p-6">
        <p class="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        <h3 class="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p class="text-gray-600 line-clamp-2">{summary}</p>
        <div class="mt-4 flex items-center text-indigo-600 font-medium">
          Read more
          <svg 
            class="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>
    </article>
  );
}
