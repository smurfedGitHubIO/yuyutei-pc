const infrastructures = [
  {
    id: 1,
    slug: "san-juanico-bridge",
    name: "San Juanico Bridge",
    location: "Samar-Leyte, Philippines",
    year: "1973",
    shortDescription: "Iconic bridge connecting Samar and Leyte islands, often cited as a symbol of progress during the Marcos era.",
    description: `The San Juanico Bridge, completed in 1973, is a marvel of engineering that spans the San Juanico Strait, connecting the islands of Samar and Leyte. At 2.16 kilometers long, it was the longest bridge in the Philippines upon its completion.

    The bridge was a flagship project during President Ferdinand Marcos' administration, allegedly built as a gift to his wife Imelda Marcos, who hailed from Leyte. It has become both an architectural icon and a controversial symbol of the era, representing both infrastructure development and questionable spending priorities.

    The graceful arch design features 43 spans and offers spectacular views of the strait. Today, it remains a vital transportation link and has become a popular tourist attraction, with visitors often stopping to admire its grandeur and take in the panoramic views.`,
    price: "Free for pedestrians, regular toll fees for vehicles",
    rating: 4.3,
    images: [
      "https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg",
      "https://images.pexels.com/photos/8260127/pexels-photo-8260127.jpeg",
      "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg",
      "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg",
      "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
      "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg",
      "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg",
      "https://images.pexels.com/photos/751206/pexels-photo-751206.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Maria Santos",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "October 12, 2024",
        rating: 5,
        comment: "A magnificent structure that showcases Filipino engineering prowess. The views from the bridge are breathtaking, especially during sunset. A must-visit when in the region!",
        helpful: 24
      },
      {
        id: 2,
        name: "Juan dela Cruz",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "September 5, 2024",
        rating: 4,
        comment: "The bridge is impressive but the surrounding area could use more development. The historical significance adds an interesting layer to the experience.",
        helpful: 11
      },
      {
        id: 3,
        name: "Emily Reyes",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        date: "August 28, 2024",
        rating: 3,
        comment: "While the bridge itself is remarkable, I can't help but think about the controversies surrounding its construction. It's a complicated legacy.",
        helpful: 18
      }
    ],
    features: [
      "Panoramic views of San Juanico Strait",
      "Architectural marvel with 43 spans",
      "Historical landmark",
      "Connects Samar and Leyte islands",
      "Excellent photography spot",
      "Recently added lighting system for night viewing"
    ]
  },
  {
    id: 2,
    slug: "cultural-center",
    name: "Cultural Center of the Philippines",
    location: "Manila, Philippines",
    year: "1969",
    shortDescription: "Premier cultural institution showcasing Filipino arts and international performances, built during the Marcos administration.",
    description: `The Cultural Center of the Philippines (CCP), designed by National Artist Leandro Locsin, is a brutalist architectural masterpiece that opened in 1969. It stands as the premier venue for performing arts in the Philippines, hosting both local and international performances.

    Built during President Ferdinand Marcos' first term, the CCP was a key component of First Lady Imelda Marcos' vision to transform Manila into the "City of Man." The complex was constructed on reclaimed land along Manila Bay and became the centerpiece of what would later be known as the CCP Complex.

    The building's imposing concrete facade exemplifies the brutalist architectural style popular during that era. Inside, the Main Theater (Tanghalang Nicanor Abelardo) features elegant interiors with a massive chandelier and can seat over 1,800 people. The CCP houses multiple performance venues, galleries, and a library dedicated to the arts.

    While celebrated for its cultural significance, the CCP has also faced criticism regarding the priorities and spending during its construction, especially in the context of the country's economic challenges at the time.`,
    price: "Varies by performance (₱300-₱5,000), free entrance to some exhibits",
    rating: 4.5,
    images: [
      "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
      "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg",
      "https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg",
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg",
      "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Roberto Lim",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        date: "October 20, 2024",
        rating: 5,
        comment: "The performances at CCP are world-class. I recently watched a ballet here and was blown away by both the performance and the venue. The building itself is an architectural marvel.",
        helpful: 35
      },
      {
        id: 2,
        name: "Anna Garcia",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        date: "September 15, 2024",
        rating: 4,
        comment: "Beautiful venue with rich history. The brutalist architecture is striking, though some areas could use renovation. The art exhibitions are always thought-provoking.",
        helpful: 18
      },
      {
        id: 3,
        name: "Miguel Ramos",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        date: "August 5, 2024",
        rating: 5,
        comment: "As an architecture enthusiast, I was mesmerized by Locsin's design. The CCP stands as a testament to Filipino creativity and vision, despite its complicated historical context.",
        helpful: 27
      }
    ],
    features: [
      "Multiple performance venues including the Main Theater",
      "Art galleries with rotating exhibitions",
      "Brutalist architecture by National Artist Leandro Locsin",
      "Library and archives for arts research",
      "Regular schedule of performances including ballet, theater, and music",
      "Seaside location with views of Manila Bay"
    ]
  },
  {
    id: 3,
    slug: "bataan-nuclear",
    name: "Bataan Nuclear Power Plant",
    location: "Morong, Bataan, Philippines",
    year: "1976-1984",
    shortDescription: "Never-activated nuclear facility that became one of the most controversial projects of the Marcos regime.",
    description: `The Bataan Nuclear Power Plant (BNPP) stands as perhaps the most controversial infrastructure project of the Marcos era. Construction began in 1976 and was completed in 1984 at a cost of over $2.3 billion. The plant was designed to address the country's growing energy needs and reduce dependence on imported oil.

    Built by Westinghouse Electric, the 621-megawatt nuclear power plant was situated on a 389-hectare site in Morong, Bataan, chosen in part for its distance from active fault lines and volcanic centers. However, subsequent studies questioned these safety assessments.

    Despite its completion, the BNPP never generated a single watt of electricity. After the 1986 People Power Revolution that ousted President Marcos, President Corazon Aquino decided not to operate the plant due to safety concerns, especially following the 1986 Chernobyl disaster.

    The plant has since become a monument to what critics describe as excessive spending, alleged corruption, and questionable planning. The Philippines continued to pay off the debt for the unused facility until 2007, with total costs estimated at over $4 billion.

    Today, the BNPP serves as a tourist attraction and educational facility, offering visitors a glimpse into what might have been the country's entry into nuclear energy production.`,
    price: "₱1,500-₱2,000 for guided tours",
    rating: 3.9,
    images: [
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
      "https://images.pexels.com/photos/3644378/pexels-photo-3644378.jpeg",
      "https://images.pexels.com/photos/590470/pexels-photo-590470.jpeg",
      "https://images.pexels.com/photos/614744/pexels-photo-614744.jpeg",
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Carlos Mendoza",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        date: "October 18, 2024",
        rating: 4,
        comment: "Fascinating tour of what could have been. The guides are knowledgeable and don't shy away from discussing the controversies. A sobering reminder of the consequences of certain political decisions.",
        helpful: 42
      },
      {
        id: 2,
        name: "Patricia Velasco",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        date: "September 25, 2024",
        rating: 3,
        comment: "Interesting but depressing. To think of the billions spent on something that never produced any benefit... The tour itself is educational though.",
        helpful: 29
      },
      {
        id: 3,
        name: "Ricardo Torres",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        date: "August 12, 2024",
        rating: 5,
        comment: "As an engineer, I found the technical aspects of the tour fascinating. It's remarkable to see the technology of that era, even if it was never put to use. A must-visit for anyone interested in energy infrastructure or recent Philippine history.",
        helpful: 37
      }
    ],
    features: [
      "Never-activated 621-megawatt nuclear reactor",
      "Educational guided tours",
      "Panoramic views of the South China Sea",
      "Historical exhibits about the plant's construction and controversy",
      "Original control room preserved as it was in the 1980s",
      "Museum showcasing nuclear technology"
    ]
  },
  {
    id: 4,
    slug: "heart-center",
    name: "Philippine Heart Center",
    location: "Quezon City, Philippines",
    year: "1975",
    shortDescription: "Specialized hospital for cardiovascular care established during the Marcos administration.",
    description: `The Philippine Heart Center (PHC) was established in 1975 as part of President Ferdinand Marcos' health infrastructure program. It was conceived as a specialized hospital dedicated to the prevention, diagnosis, and treatment of cardiovascular diseases.

    The PHC was one of several specialized medical centers established during this period, alongside the Lung Center, Kidney Center, and Children's Medical Center. These institutions were created to address specific health concerns and reduce the need for Filipinos to seek treatment abroad.

    Designed by Filipino architect Jorge Ramos, the facility features a distinctive architectural style reflective of its era, with clean lines and functional spaces. The original building has been expanded over the years to accommodate growing demand for cardiovascular care.

    Unlike some other Marcos-era projects, the PHC has been widely recognized for its positive impact on Philippine healthcare. It has continued to operate as a premier cardiovascular center throughout different administrations, providing both specialized care and medical training.

    Today, the PHC stands as one of the leading cardiac hospitals in Southeast Asia, offering comprehensive services from preventive cardiology to complex heart surgeries and transplants. While its establishment is linked to the Marcos era, its ongoing mission of providing specialized healthcare continues to benefit numerous Filipinos.`,
    price: "Varies by medical service (both private and public options available)",
    rating: 4.6,
    images: [
      "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg",
      "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg",
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
      "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg",
      "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg",
      "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Elena Bautista",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        date: "October 22, 2024",
        rating: 5,
        comment: "My father received life-saving treatment here. The medical staff is world-class, and despite its age, the facility is well-maintained. Truly one of the positive legacies of that era.",
        helpful: 48
      },
      {
        id: 2,
        name: "Antonio Gonzales",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
        date: "September 30, 2024",
        rating: 4,
        comment: "As someone who had to undergo cardiac procedures, I can attest to the quality of care at PHC. The building shows its age in some areas, but the expertise of the doctors is unquestionable.",
        helpful: 31
      },
      {
        id: 3,
        name: "Sofia Cruz",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        date: "August 15, 2024",
        rating: 5,
        comment: "The Heart Center stands as proof that not all infrastructure projects from that period were wasteful. This institution has saved countless lives and continues to be at the forefront of cardiac care in the region.",
        helpful: 52
      }
    ],
    features: [
      "Specialized cardiovascular care facilities",
      "Advanced cardiac diagnostic equipment",
      "Catheterization laboratories",
      "Cardiac surgery theaters",
      "Training programs for cardiac specialists",
      "Both private and public ward options",
      "Research department for cardiovascular diseases"
    ]
  },
  {
    id: 5,
    slug: "folk-arts-theater",
    name: "Folk Arts Theater",
    location: "Manila, Philippines",
    year: "1974",
    shortDescription: "Open-air performance venue built in record time for the 1974 Miss Universe Pageant hosted during the Marcos regime.",
    description: `The Folk Arts Theater, now known as the Tanghalang Francisco Balagtas, was constructed in a record-breaking 77 days in 1974 specifically to host the Miss Universe Pageant. This rapid construction was ordered by First Lady Imelda Marcos to showcase Filipino capability and efficiency.

    Designed by National Artist for Architecture Leandro Locsin, the same architect behind the Cultural Center of the Philippines, the Folk Arts Theater features a distinctive geometric design with a folded-plate roof. The open-air amphitheater could seat approximately 10,000 people, making it one of the largest performance venues in the country at the time.

    Located within the CCP Complex on reclaimed land along Manila Bay, the theater was part of Imelda Marcos' vision to create a cultural and arts district in Manila. After successfully hosting the Miss Universe Pageant, it became a venue for various performances, particularly those showcasing Filipino traditional arts and culture.

    The Folk Arts Theater represented both the ambitious infrastructure projects of the Marcos era and the regime's desire to present the Philippines as a modern, culturally rich nation on the global stage. Today, while showing signs of age, it continues to host various events and stands as a reminder of that complex period in Philippine history.`,
    price: "Varies by event (₱200-₱1,000)",
    rating: 3.8,
    images: [
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg",
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
      "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg",
      "https://images.pexels.com/photos/1456292/pexels-photo-1456292.jpeg",
      "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Rafael Ocampo",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        date: "October 5, 2024",
        rating: 3,
        comment: "The structure is showing its age, but there's something special about watching performances in this historic venue. The acoustics are surprisingly good for an open-air theater.",
        helpful: 19
      },
      {
        id: 2,
        name: "Isabella Reyes",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        date: "September 18, 2024",
        rating: 4,
        comment: "I attended a traditional dance performance here and was struck by how the venue itself feels like part of Philippine cultural history. The fact that it was built in just 77 days is remarkable, regardless of one's political views.",
        helpful: 24
      },
      {
        id: 3,
        name: "Diego Macaraeg",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        date: "August 22, 2024",
        rating: 4,
        comment: "As an architecture student, I appreciate Locsin's design principles evident in this structure. While not as well-maintained as it could be, the Folk Arts Theater remains an important piece of Philippine architectural history.",
        helpful: 33
      }
    ],
    features: [
      "Open-air amphitheater with 10,000 seating capacity",
      "Distinctive folded-plate roof design",
      "Part of the CCP Complex along Manila Bay",
      "Historically significant as the 1974 Miss Universe venue",
      "Hosts traditional Filipino performances",
      "Designed by National Artist Leandro Locsin"
    ]
  },
  {
    id: 6,
    slug: "manila-film-center",
    name: "Manila Film Center",
    location: "Manila, Philippines",
    year: "1981-1982",
    shortDescription: "Controversial structure rushed for completion, known for a tragic construction accident and alleged paranormal activity.",
    description: `The Manila Film Center stands as one of the most controversial and tragic infrastructure projects of the Marcos era. Construction began in 1981 with an ambitious deadline to complete the structure in time for the 1982 Manila International Film Festival, a project spearheaded by First Lady Imelda Marcos to establish Manila as a global film center.

    Designed to resemble the Parthenon in Greece, the building featured a grand neoclassical facade. The rushed construction schedule required around 4,000 workers laboring in three shifts, 24 hours a day.

    Tragedy struck on November 17, 1981, when scaffolding collapsed, burying numerous workers in quick-drying wet cement. Controversially, work allegedly continued despite the accident, and there are conflicting accounts about whether all bodies were properly recovered. Official records indicate few casualties, but persistent rumors suggest the number was much higher.

    The building was completed in time for the film festival, but the accident cast a long shadow over the project. After the Marcos regime fell in 1986, the building fell into disuse and disrepair. It has since housed various government offices and briefly served as a casino.

    Today, the Manila Film Center remains partially restored but is largely unused. It has gained notoriety in popular culture as a supposedly haunted building, with numerous paranormal investigations and ghost stories associated with the site.`,
    price: "Not regularly open to the public; special event prices vary",
    rating: 3.2,
    images: [
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
      "https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg",
      "https://images.pexels.com/photos/9460437/pexels-photo-9460437.jpeg",
      "https://images.pexels.com/photos/3779785/pexels-photo-3779785.jpeg",
      "https://images.pexels.com/photos/5835401/pexels-photo-5835401.jpeg"
    ],
    reviews: [
      {
        id: 1,
        name: "Luis Villanueva",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        date: "October 15, 2024",
        rating: 3,
        comment: "A haunting reminder of the human cost of rushed development. The building has an undeniably eerie atmosphere, especially knowing its history. Worth seeing from the outside, though interior access is limited.",
        helpful: 41
      },
      {
        id: 2,
        name: "Teresa Domingo",
        avatar: "https://randomuser.me/api/portraits/women/39.jpg",
        date: "September 27, 2024",
        rating: 2,
        comment: "The neglect of this building is evident. While historically significant, it's sad to see it in such a state of disrepair. The tragic stories associated with its construction make it a somber place to visit.",
        helpful: 27
      },
      {
        id: 3,
        name: "Gabriel Santos",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        date: "August 30, 2024",
        rating: 4,
        comment: "As someone interested in both architecture and dark history, I found the Manila Film Center fascinating. The neoclassical design contrasts starkly with its tragic past. It deserves preservation as a historical site, regardless of one's view of the era that produced it.",
        helpful: 36
      }
    ],
    features: [
      "Neoclassical design inspired by the Parthenon",
      "Site of the 1982 Manila International Film Festival",
      "Historical significance related to the Marcos era",
      "Subject of numerous paranormal investigations",
      "Located within the CCP Complex",
      "Limited public access except during special events"
    ]
  }
];
export {
  infrastructures as i
};
