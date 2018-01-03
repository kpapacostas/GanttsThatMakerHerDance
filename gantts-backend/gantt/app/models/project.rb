class Project < ApplicationRecord
  has_many :tracks
  has_many :tasks, through: :tracks
end
