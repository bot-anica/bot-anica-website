export const COURSES = [
  // {
  //   name: 'Пример',
  //   urlParam: 'example',
  //   sections: ['hero', 'features', 'problemSolution', 'whySpecial', 'courseProgram', 'pathToSuccess', 'successStories', 'pricing', 'faq'],
  // },
  {
    name: 'Python Basics',
    urlParam: 'python-basics',
    sections: ['hero', 'problemSolution', 'whySpecial', 'courseProgram', 'reviews', 'pricing', 'faq'],
  },
  {
    name: 'Telegram RSS Bot MVP',
    urlParam: 'telegram-rss-bot-mvp',
    sections: ['hero', 'problemSolution', 'whySpecial', 'courseProgram', 'reviews', 'pricing', 'faq'],
  },
  {
    name: 'Telegram RSS Bot',
    urlParam: 'telegram-rss-bot',
    sections: ['hero', 'problemSolution', 'whySpecial', 'courseProgram', 'pricing', 'faq'],
  },
];

export const courseRegistry = {
  getCourseByUrlParam: (urlParam: string) => {
    return COURSES.find(c => c.urlParam === urlParam);
  }
};