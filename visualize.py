import numpy as np
import pickle

from sklearn.cluster import KMeans

from yellowbrick.features import Rank2D
from yellowbrick.features import pca_decomposition
from yellowbrick.features import parallel_coordinates
from yellowbrick.features import radviz
from yellowbrick.features import Manifold

from yellowbrick.datasets import load_credit

from yellowbrick.cluster import InterclusterDistance

def euclidean_distance(vectors_1, vectors_2):
    centroid_1 = sum(vectors_1)/len(vectors_1)
    centroid_2 = sum(vectors_2)/len(vectors_2)
    dist = np.linalg.norm(centroid_1 - centroid_2)
    
    return dist

attributes = np.load("<attributes>")
labels = np.load("<labels>")

labels[labels =='benign'] = 0
labels[labels =='malicious'] = 1
labels = labels.astype(int)

attributes_benign = attributes[np.argwhere(labels==0)[:,0]]
attributes_malicious = attributes[np.argwhere(labels==1)[:,0]]

dist = euclidean_distance(attributes_benign, attributes_malicious)
print(dist)


attributes_joed = np.load("attributes_test_joed.npy")
labels_joed = np.load("labels_test_joed.npy")

labels_joed[labels_joed=='benign'] = 0
labels_joed[labels_joed=='malicious'] = 1
labels_joed = labels_joed.astype(int)

attributes_joed_benign = attributes_joed[np.argwhere(labels_joed==0)[:,0]]
attributes_joed_malicious = attributes_joed[np.argwhere(labels_joed==1)[:,0]]

visulizer = Manifold()
visulizer.fit_transform(attributes,labels)
visulizer.show(outpath='manifold_test.png')

model = KMeans(2)
visualizer = InterclusterDistance(model)
visualizer.fit(attributes_joed)
visualizer.show(outpath='intercluster_distance_test_joed.png')

visualizer = Rank2D(algorithm="pearson")
visualizer.fit_transform(X)
visualizer.show(outpath='rank2d.png')

visualizer = pca_decomposition(attributes, labels)
visualizer.show(outpath='pca.png')

visualizer = parallel_coordinates(attributes, labels)
visualizer.show(outpath="parallel_coordinates.png")

visualizer = radviz(attributes, labels)
visualizer.show(outpath="radviz.png")


feature2int_dict_normal = pickle.load(open("<normal feature files>", 'rb'))
feature2int_dict_joed = pickle.load(open("<obfuscation feature files>", 'rb'))
int2feature_dict_normal = {v:k for k,v in feature2int_dict_normal.items()}
int2feature_dict_joed = {v:k for k,v in feature2int_dict_joed.items()}

importances_normal = np.load("<normal importances files>")
importances_joed = np.load("<obfuscation importances files>")

importances_normal_top10_index = np.argsort(importances_normal)[-10:][::-1]
importances_joed_top10_index = np.argsort(importances_joed)[-10:][::-1]

feature_normal_top10 = []
for index in importances_normal_top10_index:
    feature_normal_top10.append(int2feature_dict_normal[index])
    
feature_joed_top10 = []
for index in importances_joed_top10_index:
    feature_joed_top10.append(int2feature_dict_joed[index])


