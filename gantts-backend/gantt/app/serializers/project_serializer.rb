class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :tracks
  has_many :events, through: :tracks
end
