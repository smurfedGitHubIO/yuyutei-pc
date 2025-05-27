export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jose Rizal Santos',
    role: 'Founder & Historical Researcher',
    bio: 'Jose founded GuiltTripAdvisor after completing his PhD in Southeast Asian History. His research focuses on the socioeconomic impact of infrastructure projects during authoritarian regimes. He believes in examining history critically while acknowledging complexity.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Maria Clara Reyes',
    role: 'Lead Content Writer',
    bio: 'With a background in journalism and cultural studies, Maria crafts the narrative for each infrastructure profile. She specializes in balancing factual reporting with engaging storytelling, ensuring that the historical context is never oversimplified.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Antonio Bonifacio',
    role: 'Architectural Photographer',
    bio: 'Antonio documents the physical legacy of the Marcos era through his lens. His photography captures both the grandeur and decay of these structures, telling visual stories that words alone cannot convey. He has published two photo books on Southeast Asian architecture.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    id: 4,
    name: 'Isabella Magsaysay',
    role: 'User Experience Designer',
    bio: 'Isabella brings these historical narratives to life through thoughtful digital design. Her work is inspired by Filipino heritage and modernist aesthetics, creating an interface that reflects the tensions of the era being documented.',
    image: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    id: 5,
    name: 'Gabriel Laurel',
    role: 'Community Engagement Director',
    bio: 'Gabriel facilitates dialogue around the complex legacy of these infrastructures. He organizes virtual and in-person discussions, believing that confronting historical narratives requires community conversation rather than monolithic perspectives.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg'
  }
];