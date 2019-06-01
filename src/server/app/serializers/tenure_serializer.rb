class TenureSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :grade,
    :rating,
    :player
  )

  def player
    PlayerSerializer.new object.player 
  end
  
end
