const Feed = require("../model/feed");

exports.getfeed = async (req, res) => {
  const feed = await Feed.findByPk(req.params.id);
  res.status(200).json({
    feed: feed,
  });
};

exports.getAllfeed = async (req, res) => {
  const feed = await Feed.findAll();
  res.status(200).json({
    feed: feed,
  });
};

exports.createfeed = async (req, res) => {
  const name = req.body.name;
  const post = req.body.post;
  const description = req.body.description;
  const createPost = await Feed.create({
    name: name,
    post: post,
    description: description,
  });
  res.status(200).json({
    createPost: createPost,
  });
};

exports.createAllfeed = async (req, res) => {
  const posts = req.body.posts;
  const morepost = await Feed.bulkCreate(posts);
  res.status(200).json({
    morepost: morepost,
  });
};

exports.updatefeed = async (req, res) => {
  const name = req.body.name;
  const post = req.body.post;
  const description = req.body.description;
  await Feed.update(
    {
      name: name,
      post: post,
      description: description,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  const feeds = await Feed.findByPk(req.body.id);
  res.status(200).json({
    feeds: feeds,
  });
};

exports.updateAllfeed = async (req, res) => {
  let feeds = [];
  const updatedfeeds = req.body.updatedfeeds;
  for (updatedfeed of updatedfeeds) {
    await Feed.update(
      {
        name: updatedfeed.name,
        post: updatedfeed.post,
        description: updatedfeed.description,
      },
      {
        where: {
          id: updatedfeed.id,
        },
      }
    );
    feeds.push(await Feed.findByPk(updatedfeed.id));
  }
  res.status(200).json({
    feeds: feeds,
  });
};

exports.deleteFeed = async (req, res) => {
  const name = req.body.name;
  const post = req.body.post;
  const description = req.body.description;
  const deletedData = await Feed.destroy({
    where: {
      name: name,
      post: post,
      description: description,
    },
  });
  res.status(200).json({
    deletedData: deletedData,
  });
};

exports.deleteAllfeed = async (req, res) => {
  const deletedallfeed = await Feed.destroy({ truncate: true });
  res.status(200).json({
    deletedallfeed: deletedallfeed,
    message: "Deleted all the feeds",
  });
};
