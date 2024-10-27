// components/CustomIcon.tsx

interface IconProps {
    name: 'github' | 'globe' | 'arrow-right' | 'arrow-left'| 'linkedin';  // Add more icon names as needed
    size?: number;     // Optional size prop
    className?: string; // Optional additional classes
}

const iconPaths = {
    github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    globe: [
        "<circle cx='12' cy='12' r='10' />",
        "<line x1='2' y1='12' x2='22' y2='12' />",
        "<path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />"
    ],
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    'arrow-right': "M5 12h14M12 5l7 7-7 7",
    'arrow-left': "M19 12H5M12 19l-7-7 7-7"
};

export default function CustomIcon({ name, size = 24, className = "" }: IconProps) {
    const paths = iconPaths[name];

    return (
        <svg 
        class={`${className}`}
        width={size}
        height={size}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        >
        {Array.isArray(paths) 
            ? paths.map((path, index) => (
                path.startsWith('<')
                    ? <g key={index} dangerouslySetInnerHTML={{ __html: path }} />
                    : <path key={index} d={path} />
            ))
                : <path d={paths} />
        }
        </svg>
    );
}
