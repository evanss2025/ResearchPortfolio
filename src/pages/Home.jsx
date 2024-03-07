import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Home() {

  function showReference() {
    const worksCited = document.getElementById('worksCited');
    
    worksCited.style.display = 'block';

    }

  function closeReference() {
    const worksCited = document.getElementById('worksCited');
    worksCited.style.display = 'none';
  }


  return (
    <div className="w-full h-full">
      
      <div className="flex flex-col gap-4 w-full min-h-[400px] max-h=[60vh] m-3">
        <h1 className="font-bold text-3xl text-cyan-300">Exploring Slime Mold-Inspired Strategies for Improved Domain Adaption for Visual Recognition in ML</h1>
        <div id="abstract" className="text-xl">
          <h1 className="font-bold text-cyan-300 text-2xl">Abstract</h1>
          <p>This research addressed the challenge of domain shift in machine learning, where a distribution shift between training and testing datasets leads to accuracy issues. Drawing inspiration from the adaptive behaviors of slime mold Physarum Polycephalum, the study implemented Dynamic Resource Allocation, Decentralized Decision-Making, and Dynamic Decentralized Domain Adaptation to enhance adaptability and efficiency in handling domain shifts during visual recognition tasks. The code inspired by slime mold behavior, implemented on the Street View House Numbers (SVHN) dataset as the source domain and the MNIST dataset as the target domain, incorporated individual predictions autonomously influencing model updates based on local criteria and adapting the neural network architecture based on the characteristics of the different domains. The Decentralized Decision-Making strategy had the greatest improvement of 11% in accuracy, while Dynamic Resource Allocation showed a moderate 2% improvement. Dynamic Decentralized Domain Adaptation, demonstrated intermediate effectiveness with a 9% accuracy increase. This nature-inspired approach contributes insights to the ML field, offering creative solutions to domain adaptation challenges in visual recognition. This impact extends to practical applications, offering new tools for improving the robustness of machine-learning models across diverse datasets and real-world scenarios.</p>
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Introduction</h1>
          <p>
          Intelligent models leverage data to make predictions, particularly in visual recognition tasks such as object classification in images. However, a significant challenge arises from domain shift, where the distribution of data differs between training and testing phases, leading to decreased model accuracy. Domain adaptation techniques aim to mitigate this issue but often lack innovative approaches.

          In this context, drawing inspiration from nature, particularly the adaptive behaviors of slime mold Physarum polycephalum, presents a promising avenue for enhancing domain adaptation in visual recognition within machine learning. Slime molds exhibit dynamic resource allocation and decentralized decision-making, two key traits that enable them to adapt effectively to changes in their environment. By incorporating these bio-inspired strategies into machine learning models, it's possible to enhance their ability to handle domain shifts, thereby improving their performance across diverse datasets.

          The proposed research explores how these slime mold behaviors can be translated into computational models to address the challenges of domain adaptation in visual recognition tasks. By mimicking the adaptable nature of slime molds, machine learning algorithms could become more robust and versatile, ensuring accurate predictions across various real-world applications.</p>
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Hypothesis</h1>
          <p>If slime mold-informed strategies are used to enhance the transfer learning capabilities of deep neural networks for visual recognition tasks that have domain shifts, then there will be improved efficiency in handling domain shifts. </p>
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Methods and Materials</h1>
          <p>The project utilized TensorFlow, Keras, and Google Colab, with datasets including SVHN and MNIST. SVHN served as the source domain, while MNIST was the target. Initial steps involved coding the base model and preprocessing datasets. Quantitative metrics like accuracy and F1-score were chosen for evaluation.

          Slime mold-inspired strategies, including Dynamic Resource Allocation and Decentralized Decision-Making, were implemented to address domain adaptation challenges. Challenges included dataset resizing errors and selecting suitable datasets for inducing domain shift. Despite initial difficulties, the project aimed to leverage nature-inspired strategies for improving domain adaptation in machine learning models.</p>
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Data and Results</h1>
          <div id="data" className="flex grid grid-rows-2grid-flow-col gap-4">
            <div><img src="public/TableA.png"></img></div>

          </div>
          
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Discussion</h1>
          <p>The original code yielded a low average accuracy of 59.821% and an average F1-score of 0.59064 due to domain shift between MNIST and SVHN datasets. Dynamic Resource Allocation showed a slight improvement with an average accuracy of 61.492% and an average F1-score of 0.60475, likely due to better generalization across datasets. Decentralized Decision-Making exhibited the highest improvement, with an average accuracy of 71.035% and F1-score of 0.70655, possibly due to dropout rate and regularization. Dynamic Decentralized Domain Adaptation showed moderate improvement with an average accuracy of 68.004% and an average F1-score of 0.66669. The strategies' success may vary among datasets and models, particularly when source and target domains differ significantly.

          The research highlights the potential of bio-inspired strategies in neural networks, particularly in adapting to diverse domains. Future applications could extend to industries like computer vision and robotics. These findings contribute to the advancement of adaptive strategies in neural networks, addressing a critical need in machine learning applications.</p>
          <br></br>
          <h1 className="font-bold text-cyan-300 text-2xl">Conclusion</h1>
          <p>In conclusion, the research shows how slime mold-inspired strategies can improve domain adaptation for visual recognition tasks. All three strategies did show accuracy and F1-score improvements, but Decentralized Decision-Making emerged as the most successful strategy with an accuracy improvement of 11%. These findings provide innovative solutions for domain adaptation challenges, offering increased model robustness in diverse real-world scenarios.
</p>
          <br></br>
          <button
            className="shadow-md text-stone-50 p-4 bg-cyan-300 hover:bg-cyan-400 rounded-full"
            onClick={() => {
              showReference();
            }}
            >See Works Cited</button>
          <p id="worksCited" className="hidden text-xs">[1] Kouw, W., Loog, M. (2019). An introduction to domain adaptation and transfer learning. 	arXiv, 1-42. https://doi.org/10.48550/arXiv.1812.11806<br></br><br></br>

          [2] Tan, B., Zhang, Y., Pan, S. J., & Yang, Q. (2017). Distant Domain Transfer Learning.  Association for the Advancement of Artificial Intelligence, 2604–2610. https://doi.org/10.14711/thesis-991012535962503412<br></br><br></br>

          [3] Abdel-Basset, M., Mohamed, R., Chakrabortty, R. K., Ryan, M. J., & Mirjalili, S. (2021). An efficient binary slime mold algorithm integrated with a novel attacking-feeding strategy for feature selection. Computers &amp; Industrial Engineering, 153, 107078. https://doi.org/10.1016/j.cie.2020.107078 <br></br><br></br>

          [4] Chen, H., Li, C., Mafarja, M., Heidari, A. A., Chen, Y., & Cai, Z. (2022). Slime mold algorithm: A comprehensive review of recent variants and applications. International Journal of Systems Science, 54(1), 204–235. https://doi.org/10.1080/00207721.2022.2153635 <br></br><br></br>

          [5] Kay, R., Mattacchione, A., Katrycz, C., & Hatton, B. D. (2022). Stepwise slime mold growth as a template for urban design. Scientific Reports, 12(1). https://doi.org/10.1038/s41598-022-05439-w <br></br><br></br>

          [6] Tero, A., Takagi, S., Saigusa, T., Ito, K., Bebber, D. P., Fricker, M. D., Yumiki, K., Kobayashi, R., & Nakagaki, T. (2010). Rules for biologically inspired Adaptive Network Design. Science, 327(5964), 439–442. https://doi.org/10.1126/science.1177894 <br></br><br></br>

          [7] Nakagaki, T., Yamada, H., & Tóth, Á. (2000). Maze-solving by an amoeboid organism. Nature, 407(6803), 470–470. https://doi.org/10.1038/35035159 <br></br><br></br>

          [8] Alhashash, K. M., Samma, H., & Suandi, S. A. (2023). Fine-tuning of pre-trained deep face sketch models using smart switching slime mold algorithm. Applied Sciences, 13(8), 5102. https://doi.org/10.3390/app13085102 <br></br><br></br>

          [9] Li, S., Chen, H., Wang, M., Heidari, A. A., & Mirjalili, S. (2020). Slime mold algorithm: A new method for stochastic optimization. Future Generation Computer Systems, 111, 300–323. https://doi.org/10.1016/j.future.2020.03.055 <br></br><br></br>

          [10] Tang, C.-B., Zhang, Y., Wang, L., & Zhang, Z. (2019). What can AI learn from Bionic Algorithms? Physics of Life Reviews, 29, 41–43. https://doi.org/10.1016/j.plrev.2019.01.006 <br></br><br></br>

          [11] L. C. Possatti et al., "Traffic Light Recognition Using Deep Learning and Prior Maps for Autonomous Cars," 2019 International Joint Conference on Neural Networks (IJCNN), Budapest, Hungary, 2019, pp. 1-8, doi: 10.1109/IJCNN.2019.8851927. <br></br><br></br>

          [12]  Guirado, E., Tabik, S., Rivas, M. L., Alcaraz-Segura, D., & Herrera, F. (2019). Whale counting in satellite and aerial images with Deep Learning. Scientific Reports, 9(1). https://doi.org/10.1038/s41598-019-50795-9 <br></br><br></br>

          [13] Darwish, A. (2018). Bio-inspired Computing: Algorithms review, deep analysis, and the scope of applications. Future Computing and Informatics Journal, 3(2), 231–246. https://doi.org/10.1016/j.fcij.2018.06.001 <br></br><br></br>

          [14] Deng, L. (2012). The most database of handwritten digit images for machine learning research. IEEE Signal Processing Magazine, 29(6), 141–142. <br></br><br></br>

          [15] Netzer, Y., et al. (2011) . Reading Digits in Natural Images with Unsupervised Feature Learning. 1-9. <br></br><br></br>

          [16] Gopalan, R., Li, R., Patel, V. M., & Chellappa, R. (2015). Domain adaptation for visual recognition. Foundations and Trends® in Computer Graphics and Vision, 8(4), 285–378. https://doi.org/10.1561/0600000057 <br></br><br></br>

          [17] Beekman, M., & Latty, T. (2015). Brainless but multi-headed: Decision making by the Acellular Slime mold Physarum Polycephalum. Journal of Molecular Biology, 427(23), 3734–3743. https://doi.org/10.1016/j.jmb.2015.07.007 <br></br>
          
          <button
            className="shadow-md text-stone-50 p-4 bg-cyan-300 rounded-full text-lg hover:bg-cyan-400"
            onClick={() => {
              closeReference();
            }}
            >Close</button>
          </p>
        </div>
        <br></br><br></br>
        <div className="flex flex-col font-bold text-2xl justify-center items-center">
          <h1 className="flex items-center justify-center">Want to read the whole article?</h1>
          <a href="https://drive.google.com/file/d/1Mk24kuAgMhwyZg8iBmXxZ_SoItk6UG9T/view?usp=sharing" target="_blank">
            <button className="bg-cyan-300 p-4 px-6 m-4 text-stone-50 text-5xl rounded-full hover:text-5xl transition ease-in-out hover:-translate-y-1 shadow-md">Download</button>
          </a>
        
        </div>
        
        
        
      </div>
    </div>
  );
}
