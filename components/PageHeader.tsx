interface PageHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
}

export default function PageHeader({ title, subtitle, date }: PageHeaderProps) {
  // Function to format date nicely
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-900">{title}</h1>
        {subtitle && (
          <p class="mt-3 text-xl text-gray-600">{subtitle}</p>
        )}
        {date && (
          <p class="mt-4 text-sm text-gray-500">{formatDate(date)}</p>
        )}
      </div>
    </header>
  );
}
