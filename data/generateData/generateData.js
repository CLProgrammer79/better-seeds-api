const faker = require("faker"); // You'll need to install the 'faker' library

// Generate random comments
function generateComments() {
  const comments = [];
  const numComments = faker.random.number({ min: 3, max: 10 }); // Generate a random number of comments

  for (let i = 0; i < numComments; i++) {
    const comment = {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      comment: faker.lorem.sentences(),
      likes: faker.random.number({ min: 0, max: 100 }),
      timestamp: faker.date.past().getTime(),
    };
    comments.push(comment);
  }

  return comments;
}

// Generate videos with random comments
const videos = [];

// Replace this with your actual theme IDs and titles
const themes = [
  { id: "84e96018-4022-434e-80bf-000ce4cdcc5", title: "Healthy & Vitality" },
  // Add other themes here
];

themes.forEach((theme) => {
  for (let i = 0; i < 7; i++) {
    // Generate 7 videos per theme
    const video = {
      id: faker.random.uuid(),
      title: faker.lorem.words(),
      channel: theme.title,
      image: faker.image.image(),
      theme: {
        id: theme.id,
        title: theme.title,
        description: "Replace with actual theme description",
      },
      // Other video properties
      comments: generateComments(),
    };
    videos.push(video);
  }
});

// JSON structure
const data = {
  theme: themes,
  videos: videos,
};

console.log(JSON.stringify(data, null, 2)); // Print the generated JSON
