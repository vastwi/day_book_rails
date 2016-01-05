json.array!(@bills) do |bill|
  json.extract! bill, :id, :bill_no, :bill_amount, :card, :card_no
  json.url bill_url(bill, format: :json)
end
