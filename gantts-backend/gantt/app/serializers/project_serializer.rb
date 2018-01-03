class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :tracks
  has_many :tasks, through: :tracks
end
