var data = {
  'Sci-Fi': ['The Hunger Games', 'Never Let Me Go', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'Incarceron', 'Children of Men', 'I Am Legend', 'The Time Traveler is Wife', 'The Golden Compass', 'The Hunger Games: Catching Fire', 'A Clockwork Orange'],
  'Romantic': ['Rifles', 'Fifty Shades of Grey','Great Expectations', 'Serpent Gir', 'Never Let Me Go', 'Få meg på, for faen', 'Submarine', 'The Host', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'One for the Money', 'Wicked Lovely', 'The Little Mermaid', 'The Forest of Hands and Teeth', 'Shiver', 'If I Stay', 'Fallen', 'Delirium', 'Beautiful Creatures', 'Beastly', 'A Great and Terrible Beauty', 'Rock of Ages', 'The Sisterhood of the Traveling Pants 2', 'The Sisterhood of the Traveling Pants', 'Brokeback Mountain', 'Walk the Line', 'In Her Shoes', 'Peaceful Warrior', 'The Painted Veil', 'Snow Angels', 'Jane Eyre', 'The Nanny Diaries', 'Silk', 'The Great Debaters', 'P.S. I Love You', 'Miss Pettigrew Lives for a Day', 'Mamma Mia!', 'The Duchess', 'The Curious Case of Benjamin Button', 'Revolutionary Road', 'Confessions of a Shopaholic', 'The Last Station', 'Up in the Air', 'Crazy Heart', 'A Single Man', 'Tamara Drewe', 'Jane Eyre', 'Water for Elephants', 'Atonement', 'Appaloosa', 'Wuthering Heights', 'The Time Traveler is Wife', 'Stardust', 'Persuasion', 'Emma', 'Northanger Abbey', 'Sense and Sensibility', 'Pride & Prejudice', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Twilight', 'Forrest Gump', 'One Day', 'Nights in Rodanthe', 'The Notebook', 'The Last Song', 'Dear John', 'The Lucky One', 'Message in a Bottle', 'All the Pretty Horses', 'All That Heaven Allows', 'About a Boy', 'A Walk to Remember', 'A Room with a View', 'A Good Year', 'A Little Romance'],
  'Biography': ['Hours', 'Walk the Line', 'The Greatest Game Ever Played', 'Glory Road', 'The Last King of Scotland', 'The Pursuit of Happyness', 'Freedom Writers', 'Into the Wild', 'The Assassination of Jesse James by the Coward Robert Ford', 'Charlie Wilson is War', 'The Great Debaters', 'The Duchess', 'The Express', 'Public Enemies', 'The Soloist', 'The Last Station', 'The Blind Side', 'The Runaways', 'The Social Network', 'Secretariat', 'A Beautiful Mind', 'Awakenings'],
  'Horror': ['The Mist', 'I Am Legend', 'It', 'Vampire Academy'],
  'Fantasy': ['Twilight', 'Life of Pi', 'Serpent Gir', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Chronicles of Narnia: The Silver Chair', 'The Chronicles of Narnia: The Magician is Nephew', 'Paranormalcy', 'Wicked Lovely', 'Vampire Academy', 'The Looking Glass Wars', 'The Little Mermaid', 'Shiver', 'Incarceron', 'If I Stay', 'Firelight', 'Fallen', 'Delirium', 'Beautiful Creatures', 'Beastly', 'Wings', 'A Great and Terrible Beauty', 'The Woman in Black', 'The Spiderwick Chronicles', 'Nim is Island', 'Inkheart', 'The Time Traveler is Wife', 'The Lovely Bones', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Hobbit: An Unexpected Journey', 'The Chronicles of Narnia: The Voyage of the Dawn Tread', 'The Chronicles of Narnia: Prince Caspian', 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'Stardust', 'Percy Jackson: Sea of Monsters', 'Percy Jackson & the Olympians: The Lightning Thief', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Harry Potter and the Deathly Hallows: Part 1', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Sorcerer is Stone', 'Harry Potter and the Chamber of Secrets'],
  'Comedy': ['A Good Year', 'Få meg på, for faen', 'Submarine', 'Barney is Version', 'One for the Money', 'Vampire Academy', 'Rock of Ages', 'Mean Girls', 'The Sisterhood of the Traveling Pants 2', 'The Sisterhood of the Traveling Pants', 'In Her Shoes', 'The Devil Wears Prada', 'The Nanny Diaries', 'Charlie Wilson is War', 'Miss Pettigrew Lives for a Day', 'Nim is Island', 'Mamma Mia!', 'The Women', 'Confessions of a Shopaholic', 'Tamara Drewe', 'Mansfield Park', 'A Little Romance', 'About a Boy'],
  'Action': ['Rifles', 'Tom Sawyer & Huckleberry Finn', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'The Chronicles of Narnia: The Magician is Nephew', 'One for the Money', 'Vampire Academy', 'Jack Reacher', 'Friday Night Lights', 'Poseidon', 'Green Zone', 'The Chronicles of Narnia: Prince Caspian', 'The Green Mile', 'Luftslottet som sprängdes', 'Dear John', 'All the Pretty Horses', 'The Hunger Games: Catching Fire', 'A Clockwork Orange'],
  'Drama': ['Hours', 'Fifty Shades of Grey', 'Life of Pi', 'Great Expectations', 'Never Let Me Go', 'Island', 'Tom Sawyer & Huckleberry Finn', 'Simon och ekarna', 'Gomorra', 'Oranges and Sunshine', 'Submarine', 'Barney is Version', 'The Way Back', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Forest of Hands and Teeth', 'Incarceron', 'If I Stay', 'Society', 'Fallen', 'Beautiful Creatures', 'Beastly', 'Wings', 'A Great and Terrible Beauty', 'The Woman in Black', 'Rock of Ages', 'Lawless', 'Mean Moms', 'Friday Night Lights', 'Vanity Fair', 'Million Dollar Baby', 'The Magic of Ordinary Days', 'The Sisterhood of the Traveling Pants 2', 'Brokeback Mountain', 'In Her Shoes', 'The Greatest Game Ever Played', 'Glory Road', 'Poseidon', 'Peaceful Warrior', 'The Devil Wears Prada', 'The Last King of Scotland', 'Love is Abiding Joy', '10', 'The Pursuit of Happyness', 'The Painted Veil', 'Children of Men', 'Freedom Writers', 'Snow Angels', 'Jane Eyre', 'Zodiac', 'Saving Sarah Cain', 'The Nanny Diaries', 'Into the Wild', 'Silk', 'The Assassination of Jesse James by the Coward Robert Ford', 'No Country for Old Men', 'Gone Baby Gone', 'Charlie Wilson is War', 'The Great Debaters', 'I Am Legend', 'Love is Unfolding Dream', 'P.S. I Love You', 'Nothing Is Private', 'The Women', '21', 'The Duchess', 'The Express', 'The Secret Life of Bees', 'The Boy in the Striped Pyjamas', 'The Curious Case of Benjamin Button', 'Revolutionary Road', 'Public Enemies', 'Like Dandelion Dust', 'The Soloist', 'The Last Station', 'Up in the Air', 'Crazy Heart', 'A Single Man', 'The Blind Side', 'Winter is Bone', 'The Runaways', 'The Ghost Writer', 'Green Zone', 'Tamara Drewe', 'The Town', 'The Social Network', 'Secretariat', 'Jane Eyre', 'The Lincoln Lawyer', 'Water for Elephants', 'Ballet Shoes', 'Awakenings', 'Atonement', 'Appaloosa', 'We Need to Talk About Kevin', 'Wuthering Heights', 'The Time Traveler is Wife', 'Misery', 'Stand by Me', 'The Shawshank Redemption', 'The Pelican Brief', 'The Lovely Bones', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'Emma', 'Persuasion', 'Screen Two: Persuasion', 'Northanger Abbey', 'Mansfield Park', 'Sense and Sensibility', 'Pride & Prejudice', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Twilight', 'My Sister is Keeper', 'Lord of the Flie', 'Forrest Gump', 'One Day', 'Extremely Loud & Incredibly Clos', 'The Help', 'The Green Mile', 'Luftslottet som sprängdes', 'Ondskan', 'Flickan som lekte med elden', 'Män som hatar kvinnor', 'The Girl with the Dragon Tattoo', 'Nights in Rodanthe', 'The Notebook', 'The Last Song', 'Dear John', 'The Lucky One', 'Message in a Bottle', 'All the Pretty Horses', 'All That Heaven Allows', 'About a Boy', 'A Walk to Remember', 'A Room with a View', 'A Beautiful Mind', 'A Civil Action', 'A Clockwork Orange', 'A Good Year'],
  'Adventure': ['Hours', 'Life of Pi', 'Tom Sawyer & Huckleberry Finn', 'The Way Back', 'The Host', 'The Twilight Saga: Breaking Dawn - Part 1', 'The Twilight Saga: Breaking Dawn - Part 2', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'The Chronicles of Narnia: The Silver Chair', 'The Chronicles of Narnia: The Magician is Nephew', 'Paranormalcy', 'The Little Mermaid', 'Fallen', 'Delirium', 'Rise of the Guardians', 'Walk the Line', 'Poseidon', '10', 'Into the Wild', 'The Spiderwick Chronicles', 'Nim is Island', 'Inkheart', 'Stand by Me', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Hobbit: An Unexpected Journey', 'The Chronicles of Narnia: The Voyage of the Dawn Tread', 'The Chronicles of Narnia: Prince Caspian', 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'Stardust', 'Percy Jackson: Sea of Monsters', 'Percy Jackson & the Olympians: The Lightning Thief', 'The Twilight Saga: Eclipse', 'The Twilight Saga: New Moon', 'Lord of the Flie', 'Extremely Loud & Incredibly Clos', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Deathly Hallows: Part 1', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Prisoner of Azkaban', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Sorcerer is Stone', 'The Golden Compass', 'A Little Romance', 'Rifles', 'The Hunger Games', 'The Hunger Games: Catching Fire'],
  'Suspense': ['Hours', 'Fifty Shades of Grey', 'Wake', 'The Host', 'The Hunger Games: Mockingjay - Part 2', 'The Hunger Games: Mockingjay - Part 1', 'One for the Money', 'The Forest of Hands and Teeth', 'Shiver', 'The Woman in Black', 'Rise of the Guardians', 'Jack Reacher', 'The Last King of Scotland', 'Zodiac', 'No Country for Old Men', 'Gone Baby Gone', 'I Am Legend', '21', 'The Ghost Writer', 'Shutter Island', 'Green Zone', 'The Town', 'The Lincoln Lawyer', 'We Need to Talk About Kevin', 'Misery', 'The Mist', 'The Pelican Brief', 'The Lovely Bones', 'Percy Jackson: Sea of Monsters', 'Lord of the Flie', 'Extremely Loud & Incredibly Clos', 'The Green Mile', 'Luftslottet som sprängdes', 'Flickan som lekte med elden', 'Män som hatar kvinnor', 'The Girl with the Dragon Tattoo', 'The Da Vinci Code', 'Angels & Demons', 'The Hunger Games', 'The Hunger Games: Catching Fire']
};

// keys = Object.keys(data);

// console.log(data['Sci-Fi'].length);

