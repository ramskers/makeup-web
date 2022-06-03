import React, { useEffect } from "react";
import "./Gallery.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <div ref={ref} id="gallery">
      <h1 className="galleryHeader">O'Neill Collection</h1>
      <motion.div className="Gallerycontainer" animate={animation}>
        <div className="row">
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDd8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="1"
            />
            <img
              src="https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="2"
            />
            <img
              src="https://images.unsplash.com/photo-1551262919-892a6c84d26d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="3"
            />
            <img
              src="https://images.unsplash.com/photo-1470181002772-82478d164015?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="4"
            />
            <img
              src="https://images.unsplash.com/photo-1548820524-7c4742f76035?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njl8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="5"
            />
          </div>
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="2"
            />
            <img
              src="https://images.unsplash.com/photo-1551262919-892a6c84d26d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="3"
            />
            <img
              src="https://images.unsplash.com/photo-1470181002772-82478d164015?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="4"
            />
            <img
              src="https://images.unsplash.com/photo-1548820524-7c4742f76035?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njl8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="5"
            />
            <img
              src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDd8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="1"
            />
          </div>
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1551262919-892a6c84d26d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="3"
            />
            <img
              src="https://images.unsplash.com/photo-1470181002772-82478d164015?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="4"
            />
            <img
              src="https://images.unsplash.com/photo-1548820524-7c4742f76035?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njl8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="5"
            />
            <img
              src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDd8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="1"
            />
            <img
              src="https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="2"
            />
          </div>
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1470181002772-82478d164015?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="4"
            />
            <img
              src="https://images.unsplash.com/photo-1548820524-7c4742f76035?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njl8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="5"
            />
            <img
              src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDd8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="1"
            />
            <img
              src="https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="2"
            />
            <img
              src="https://images.unsplash.com/photo-1551262919-892a6c84d26d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8MTE2NDk0MzJ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="3"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
